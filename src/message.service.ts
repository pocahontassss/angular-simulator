import { Injectable } from '@angular/core';
import { IMessage } from './interfaces/IMessage';
import { Message } from './enums/Message';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private _messageSubject$: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([]);
  messages$ = this._messageSubject$.asObservable();

  showSuccess() {
    this.addMessage(Message.success, 'Данные успешно сохранены!');
  }

  showError() {
    this.addMessage(Message.error, 'Не удалось сохранить данные.');
  }

  showWarn() {
    this.addMessage(Message.warn, 'Проверьте введённые данные.');
  }

  showInfo() {
    this.addMessage(Message.info, 'У вас есть новые уведомления.');
  }

  showHttpError() {
    this.addMessage(Message.info, 'Ошибка загрузки данных с сервера');
  }

  closeMessage(id: number): void {
    // this._messages = this._messages.filter(message => message.id !== id);
    this._messageSubject$.next(
      this._messageSubject$.value.filter(message => message.id !== id)
    );
  }

  private addMessage(type: Message, text: string): void {

    const id = Date.now();

    const message: IMessage = {
      id,
      type,
      text,
      isVisible: false
    };

    this._messageSubject$.next([...this._messageSubject$.value, message]);

    setTimeout(() => {
      message.isVisible = true;
    }, 0)

    setTimeout(() => {
      this.closeMessage(id);
    }, 5000);
  }

}
