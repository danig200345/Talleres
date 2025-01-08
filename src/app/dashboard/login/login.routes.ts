import { Routes } from '@angular/router';


export const LoginRoutes: Routes = [



  {
    path: 'login',
    loadComponent: () => import('./login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }


];
