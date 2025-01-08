import { Routes } from '@angular/router';


export const AdminRoutes: Routes = [



  {
    path: 'admin',
    loadComponent: () => import('./admin.component').then(m => m.AdminComponent)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }


];
