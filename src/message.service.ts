import { Injectable } from '@angular/core';
import { IMessage } from './app/interfaces/IMessage';
import { Message } from './enums/Message';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  
  private _messages$: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([]);

  messages$: Observable<IMessage[]> = this._messages$.asObservable();

  private addMessage(text: string, type: Message): void {
    const newMessage: IMessage = {
      message: text,
      type: type
    };
    this._messages$.next([...this._messages$.value, newMessage])
    setTimeout(() => {
      this.delete(newMessage)
    }, 5000);
  }

  delete(removedMsg: IMessage): void {
    this._messages$.next(this._messages$.value.filter((message: IMessage) => message !== removedMsg));
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
