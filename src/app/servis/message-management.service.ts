import { Injectable } from '@angular/core';
import { Message } from '../interfaces/MessageCard';
import { MessageType } from '../../enums/MessagesType';

@Injectable({
  providedIn: 'root',
})
export class MessageManagementService {
  
  private messages : Message[] = [];

  get applyMessages(): Message[] {
    return [...this.messages];
  }

  addMessage(text: string, type: MessageType): void {
    const id = Date.now ();
    const newMessage: Message = {
      id: id,
      text: text,
      type: type
    }
    this.messages.unshift(newMessage);

    if (this.messages.length > 0) {
      setTimeout(() =>{
        this.closeMessage(id)
      },5000) 
    }
}

  closeMessage(id: number):void {
    this.messages = this.messages.filter(message => message.id !== id)
  }

  
}
