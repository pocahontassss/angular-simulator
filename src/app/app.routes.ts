import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { NotFoundPage } from './not-found-page/not-found-page';
import { UsersPage } from './users-page/users-page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'users', component: UsersPage},
  {path: '**', component: NotFoundPage}
];
