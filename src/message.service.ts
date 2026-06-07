import { Injectable } from '@angular/core';
import { IMessage } from './app/interfaces/IMessage';
import { Message } from './enums/Message';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  
  private messagesSubject$: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([]);

  messages$: Observable<IMessage[]> = this.messagesSubject$.asObservable();

  private addMessage(text: string, type: Message): void {
    const newMessage: IMessage = {
      message: text,
      type: type
    };
    this.messagesSubject$.next([...this.messagesSubject$.value, newMessage])
    setTimeout(() => {
      this.delete(newMessage)
    }, 5000);
  }

  delete(removedMsg: IMessage): void {
    this.messagesSubject$.next(this.messagesSubject$.value.filter((message: IMessage) => message !== removedMsg));
  }
  
  showWarn(text: string): void {
    this.addMessage( text, Message.WARN);
  } 
  
  showError(text: string): void {
    this.addMessage(text, Message.ERROR);
  } 
  
  showSuccess(text: string): void {
    this.addMessage(text, Message.SUCCESS);
  }

  showInfo(text: string): void {
    this.addMessage(text, Message.INFO);
  }

}
