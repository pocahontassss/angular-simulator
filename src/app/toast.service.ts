import { Injectable } from '@angular/core';
import { IMessage } from '../interfaces/IMessage';
import { MessageType } from '../enums/MessageType';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  private messagesSubject: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([
    { id: 1, message: 'Успешно!', type: MessageType.Success },
    { id: 2, message: 'Ошибка!', type: MessageType.Error },
    { id: 3, message: 'Предупреждение!', type: MessageType.Warn },
    { id: 4, message: 'Инфо!', type: MessageType.Info },
  ]);

  get toastMessages(): Observable<IMessage[]> {
    return this.messagesSubject.asObservable();
  }

  private addMessage(message: string, type: MessageType): void {
    const id: number = Date.now();
    const currentMessages: IMessage[] = this.messagesSubject.value;

    this.messagesSubject.next([{ id, message: message, type }, ...currentMessages]);

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
    const filteredMessages: IMessage[] = this.messagesSubject.value.filter(
      (m: IMessage) => m.id !== id
    );
    this.messagesSubject.next(filteredMessages);
  }

}
