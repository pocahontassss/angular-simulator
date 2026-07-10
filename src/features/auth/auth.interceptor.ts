import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  const accessToken: string | null = authService.getAccessToken();
  const refreshToken: string | null = authService.getRefreshToken();

  const addToken = (): HttpRequest<unknown> => {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${ accessToken }`,
      },
    });
  };

  const logoutToLogin = (): Observable<never> => {
    authService.logout();
    router.navigate(['/login']);
    return EMPTY;
  };

  if (req.url.includes('/auth/login') || req.url.includes('/auth/refresh')) {
    return next(req);
  }

  const request: HttpRequest<unknown> = accessToken ? addToken() : req;

  return next(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          return throwError(() => error);
        }

        if (!refreshToken) {
          return logoutToLogin();
        }

        return authService.refreshToken(refreshToken)
          .pipe(
            switchMap(() => next(addToken())),
            catchError(() => logoutToLogin())
          );
      })
    );

};