import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = () => {
 const authService: AuthService = inject(AuthService);
 const router: Router = inject(Router);
  if (authService.isAdmin()) {
    return true;
  }
  router.navigate(['']);
  return false;
};

