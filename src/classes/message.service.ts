import { inject, Injectable } from '@angular/core';
import { IMessage } from '../interfaces/IMessage';
import { MessageType } from '../enums/MessageType';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../config.token';
import { AppConfig } from '../interfaces/IAppConfig';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messagesSubject: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([]);
  messages$: Observable<IMessage[]> = this.messagesSubject.asObservable();

  APP_CONFIG: AppConfig = inject(APP_CONFIG);

  private addMessage(type: MessageType, text: string): void {
    if (!this.APP_CONFIG.enableNotifications) {
      return;
    }

    const message: IMessage = { type, text };

    const current: IMessage[] = this.messagesSubject.getValue();
    const updated: IMessage[] = [message, ...current];

    this.messagesSubject.next(updated);

    setTimeout(() => {
      this.closeMessage(message);
    }, 5000);
  }

  showInfo(message: string = 'Информация для пользователя'): void {
    this.addMessage(MessageType.INFO, message);
  }

  showWarn(message: string = 'Предупреждение'): void {
    this.addMessage(MessageType.WARN, message);
  }

  showError(message: string = 'Произошла ошибка'): void {
    this.addMessage(MessageType.ERROR, message);
  }

  showSuccess(message: string = 'операция выполнена успешно'): void {
    this.addMessage(MessageType.SUCCESS, message);
  }

  closeMessage(message: IMessage): void {
    const current: IMessage[] = this.messagesSubject.getValue();
    const updated: IMessage[] = current.filter((m: IMessage) => m !== message);

    this.messagesSubject.next(updated);
  }
}
