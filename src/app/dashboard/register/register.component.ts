import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CustomValidators } from '../../class/costum';
import { AsyncValidators } from '../../class/userExists';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: string = ''
  password: string = ''
  registerForm: FormGroup;
  sentMessage = false; // Indicador de mensaje enviado
  errorMessage = ''; // Mensaje de error
  private _error = new Subject<string>(); // Subject para manejar mensajes de error

  constructor(private register: LoginService, private router: Router, private formBuilder: FormBuilder, private Auth: AuthService) {
    this.registerForm = this.formBuilder.group({
      user: ['', [Validators.required, CustomValidators.userName], [AsyncValidators.userExists(this.Auth)]],
      password: ['', [Validators.required, CustomValidators.password]]
    })
  }

  ngOnInit() {
    // Suscripción al Subject de error para mostrar mensajes de error
    this._error.subscribe(message => this.errorMessage = message);
    // Desactivar el mensaje de error después de 10 segundos
    this._error.pipe(debounceTime(10000)).subscribe(() => this.errorMessage = '');
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { user, password } = this.registerForm.value;
      this.register.postRegister(user, password).subscribe({
        next: () => this.router.navigate(['/login'])
      })

      this.registerForm.reset();
    }
    else {
      this.registerForm.markAllAsTouched();
      this._error.next('Por favor, completa todos los campos y asegurate de que esten correctos.');
    }
  }

}
