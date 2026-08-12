import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpStatusDescription } from '../enums/HttpStatusDescription';
import { Observable, tap } from 'rxjs';
import { APP_CONFIG } from '../config.token';
import { inject } from '@angular/core';
import { AppConfig } from '../interfaces/IAppConfig';

function getStatusMessage(status: number): string {
  switch (status) {
    case HttpStatusDescription.SUCCESS:
      return 'Запрос выполнен успешно';

    case HttpStatusDescription.UNAUTHORIZED:
      return 'Доступ не разрешён. Пожалуйста, авторизуйтесь.';

    case HttpStatusDescription.FORBIDDEN:
      return 'Доступ запрещён. У вас нет прав.';

    case HttpStatusDescription.NOT_FOUND:
      return 'Ресурс не найден. Проверьте адрес.';

    case HttpStatusDescription.SERVER_ERROR:
      return 'Внутренняя ошибка сервера. Попробуйте позже.';

    default:
      return 'Неизвестный статус';
  }
}

export function loggingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const config: AppConfig = inject(APP_CONFIG);
  const started: number = Date.now();
  return next(req).pipe(
    tap((event: HttpEvent<unknown>) => {
      const ended: number = Date.now();
      if (event.type === HttpEventType.Response && config.enableLogs) {
        const response: HttpResponse<unknown> = event as HttpResponse<unknown>;
        const duration: number = Date.now() - started;
        const statusMessage: string = getStatusMessage(response.status);
        console.log(
          `[HTTP ${ req.method }] ${ req.url } | Статус: ${ response.status } (${ statusMessage }) | Время: ${ duration } мс`
        );
      }
    }),
  );
}
