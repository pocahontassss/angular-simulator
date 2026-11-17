import { Injectable } from '@angular/core';
import { MessageType } from '../../enums/message-type';
import { IMessage } from '../interfaces/IMessage';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MessageService {

  private messagesSubject: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([]);
  messages$: Observable<IMessage[]> = this.messagesSubject.asObservable();

  showSuccess(text: string): void {
    this.addMessage(text, MessageType.SUCCESS);
  }

  showError(text: string): void {
    this.addMessage(text, MessageType.ERROR);
  }

  showWarn(text: string): void {
    this.addMessage(text, MessageType.WARNING);
  }

  showInfo(text: string): void {
    this.addMessage(text, MessageType.INFO);
  }

  closeMessage(id: number): void {
    this.messagesSubject.next(this.messagesSubject.value.filter((msg: IMessage) => msg.id !== id));
  }

  private addMessage(text: string, type: MessageType): void {
    const newId: number = Date.now();
    const newMessage: IMessage = {
      id: newId,
      text: text,
      type: type,
    };

    this.messagesSubject.next([newMessage, ...this.messagesSubject.value]);
    setTimeout(() => {
      this.closeMessage(newId);
    }, 5000);
  }

}
