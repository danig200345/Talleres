import { Routes } from '@angular/router';



export const DashboardRoutes: Routes = [

  {
    path: '',
    loadChildren: () => import('./login/login.routes').then(m => m.LoginRoutes)
  },

  {
    path: '',
    loadChildren: () => import('./register/register.routes').then(m => m.RegisterRoutes)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }


];
