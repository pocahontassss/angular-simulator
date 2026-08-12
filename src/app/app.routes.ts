import { adminGuard } from '../features/auth/admin.guard';
import { authGuard } from '../features/auth/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('../features/auth/auth/auth.component').then(m => m.AuthComponent)
  },
  {
    path: 'posts',
    canActivate: [authGuard, adminGuard],
    loadChildren: () => import('../features/posts/posts-routing.module').then(m => m.postRoutes)
  },
  {
    path: 'user',
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import('../users-page/users-page.component').then(m => m.UsersPageComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('../home/home.component').then(m => m.HomeComponent)
  },
  {
    path: '**',
    loadComponent: () => import('../not-found/not-found.component').then(m => m.NotFoundComponent)
  },
];
