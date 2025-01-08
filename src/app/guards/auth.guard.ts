
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private Auth: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.Auth.getAuth().pipe(
      map(() => true), // Si el servidor responde correctamente, permite el acceso
      catchError(() => {
        this.router.navigate(['/login']); // Si el servidor responde con un error, redirige a la página de inicio de sesión
        return of(false);
      }) // Devuelve false si ocurre un error
    );
  }
}
