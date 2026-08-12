import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  if (authService.isLoggedIn()) {
    return true;
  }
  authService.redirectToLoginPage();
  return false;
};
