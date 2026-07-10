import { HttpErrorResponse, HttpHandler, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MessageType } from '../../enums/MessageType';
import { ToastService } from '../../service/toast.service';

export const serverErrorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const toastService: ToastService = inject(ToastService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status >= 500 && error.status < 600) {
        toastService.addMessage(
          'Сервер временно недоступен. Попробуйте позже.',
          MessageType.ERROR
        );
      }
      return throwError(() => error);
    })
  );
};