import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private LoginService: LoginService, private router: Router) { }

  logoutUser() {
    this.LoginService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']); // Redirige al usuario a la página de login
      },
      error: (error) => {
        console.error('Error cerrando sesión:', error);
      }
    });
  }

}
