import { Routes } from '@angular/router';
import { postResolver } from '../features/posts/post.resolver';
import { authGuard } from '../features/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('../features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('../home-page/home-page.component').then(m => m.HomePageComponent)
  },
  {
    path: 'users-page',
    canActivate: [authGuard],
    loadComponent: () => import('../users-page/users-page.component').then(m => m.UsersPageComponent)
  },
  {
    path: 'posts',
    canActivate: [authGuard],
    loadComponent: () => import('../features/posts/posts/posts.component').then(m => m.PostsComponent)
  },
  {
    path: 'posts/create',
    canActivate: [authGuard],
    loadComponent: () => import('../features/posts/post-create/post-create.component').then(m => m.PostCreateComponent)
  },
  {
    path: 'posts/:id',
    canActivate: [authGuard],
    loadComponent: () => import('../features/posts/post-detail/post-detail.component').then(m => m.PostDetailComponent),
    resolve: {
      post: postResolver
    }
  },
  {
    path: '**',
    canActivate: [authGuard],
    loadComponent: () => import('../not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent)
  }
];