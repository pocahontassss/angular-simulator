import { Injectable } from '@angular/core';
import { IMessage } from '../interfaces/IMessage';
import { MessageType } from '../enums/MessageType';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  private messages: IMessage[] = [
    { id: 1, message: 'Успешно!', type: MessageType.Success },
    { id: 2, message: 'Ошибка!', type: MessageType.Error },
    { id: 3, message: 'Предупреждение!', type: MessageType.Warn },
    { id: 4, message: 'Инфо!', type: MessageType.Info },
  ];

  get toastMessages(): IMessage[] {
    return this.messages;
  }

  private addMessage(message: string, type: MessageType): void {
    const id: number = Date.now();

    this.messages.unshift({ id, message: message, type });

    setTimeout(() => {
      this.closeMessage(id);
    }, 5000);
  }

  showSuccess(message: string): void {
    this.addMessage(message, MessageType.Success);
  }

  showError(message: string): void {
    this.addMessage(message, MessageType.Error);
  }

  showWarn(message: string): void {
    this.addMessage(message, MessageType.Warn);
  }

  showInfo(message: string): void {
    this.addMessage(message, MessageType.Info);
  }


  closeMessage(id: number): void {
    this.messages = this.messages.filter((m: IMessage) => m.id !== id);
  }

}
