import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { debounceTime, Subject } from 'rxjs';
import { CustomValidators } from '../../class/costum';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  type: number = 0;
  loginForm: FormGroup;
  sentMessage = false; // Indicador de mensaje enviado
  errorMessage = ''; // Mensaje de error
  private _error = new Subject<string>(); // Subject para manejar mensajes de error

  constructor(private LoginService: LoginService, private router: Router, private formLoginBuild: FormBuilder) {
    this.loginForm = this.formLoginBuild.group({
      user: ['', [Validators.required, CustomValidators.userNameMatch]],
      password: ['', [Validators.required, CustomValidators.passwordMatch]]
    })
  }

  ngOnInit() {
    // Suscripción al Subject de error para mostrar mensajes de error
    this._error.subscribe(message => this.errorMessage = message);
    // Desactivar el mensaje de error después de 10 segundos
    this._error.pipe(debounceTime(10000)).subscribe(() => this.errorMessage = '');
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { user, password } = this.loginForm.value;
      this.LoginService.postLogin(user, password).subscribe({
        next: (loginResponse) => {
          this.type = loginResponse.type
          if (this.type === 999) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/inicio']);
          }
          this.loginForm.reset();

        }
      })
    } else {
      this.loginForm.markAllAsTouched();
      this._error.next('Por favor, completa todos los campos y asegurate de que esten correctos.');
    }
  }
}
