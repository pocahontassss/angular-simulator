import { Routes } from '@angular/router';
import * as HomeModule from './pages/home/home.component';
import * as UsersModule from './pages/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
const HomeComponent = (HomeModule as any).HomeComponent ?? (HomeModule as any).default;
const UsersComponent = (UsersModule as any).UsersComponent ?? (UsersModule as any).default;

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: NotFoundComponent }
];