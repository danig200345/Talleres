import { Routes } from '@angular/router';



export const RegisterRoutes: Routes = [



  {
    path: 'register',
    loadComponent: () => import('./register.component').then(m => m.RegisterComponent)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }


];
