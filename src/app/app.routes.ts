import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./pages/inicio/inicio.component').then(m => m.InicioComponent),
    canActivate: [AuthGuard]

  },

  {
    path: 'cursos',
    loadComponent: () => import('./pages/cursos/cursos.component').then(m => m.CursosComponent),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.DashboardRoutes),

  },
  {
    path: '',
    loadChildren: () => import('./dashboard/admin/admin.routes').then(m => m.AdminRoutes),
    canActivate: [AuthGuard]

  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }


];
