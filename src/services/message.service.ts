import { Injectable } from '@angular/core';
import { IMessage } from '../interfaces/IMessage';
import { MessageType } from '../enums/MessageType';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private messages: IMessage[] = [];
  private nextId: number = 1;

  get allMessages(): IMessage[] {
    return this.messages;
  }

  addMessage(text: string, type: MessageType): void {
    const newMessage: IMessage = {
      id: this.nextId,
      text: text,
      type: type,
    };

    this.nextId += 1;

    this.messages = [newMessage, ...this.messages];
    window.setTimeout((): void => {
      this.closeMessage(newMessage.id);
    }, 5000);
  }

  closeMessage(id: number): void {
    this.messages = this.messages.filter(
      (message: IMessage): boolean => message.id !== id
    );
  }

}