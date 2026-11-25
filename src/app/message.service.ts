import { Injectable } from '@angular/core';
import { Message } from './message.interface';
import { MessageType } from '../enums/message-type.enum';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages: Message[] = [];
  private _nextId = 1;

  get messages(): ReadonlyArray<Message> {
    return this._messages;
  }

  addMessage(title: string, text: string, type: MessageType): void {
    const newMessage: Message = {
      id: this._nextId++,
      title,
      text,
      type,
    };

    this._messages = [newMessage, ...this._messages];

    setTimeout(() => {
      this.closeMessage(newMessage.id);
    }, 5000);
  }

  closeMessage(id: number): void {
    this._messages = this._messages.filter(m => m.id !== id);
  }
}