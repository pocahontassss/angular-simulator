import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { MessageService } from '../classes/message.service';
import { inject } from '@angular/core';

export function httpErrorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const messageService: MessageService = inject(MessageService);
  return next(req).pipe(
    tap((event: HttpEvent<unknown>) => {
      if (event.type === HttpEventType.Response) {
        if (event.status >= 500) {
          messageService.showError('HttpStatusDescription.SERVER_ERROR');
          console.log(req.url, event.status);
        }
      }
    }),
  );
}
