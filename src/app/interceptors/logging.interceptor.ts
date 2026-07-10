import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export const loggingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const startTime: number = Date.now();

  console.log('Метод:', req.method);
  console.log('URL:', req.url);

  return next(req).pipe(
    tap((event: HttpEvent<unknown>) => {
      if (event.type === HttpEventType.Response) {
        const response: HttpResponse<unknown> = event as HttpResponse<unknown>;
        const elapsed: number = Date.now() - startTime;

        console.log('Статус:', response.status);
        console.log('Время выполнения:', elapsed, 'мс');
      }
    }),
    catchError((error: HttpErrorResponse) => {
      const elapsed: number = Date.now() - startTime;
      
      console.error('Статус ошибки:', error.status);
      console.error('Время выполнения:', elapsed, 'мс');
      console.error('Ошибка:', error);

      return throwError(() => error);
    })
  );
};