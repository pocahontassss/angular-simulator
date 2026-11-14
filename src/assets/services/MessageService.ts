import { Injectable } from '@angular/core';
import { Message } from '../interfaces/MessageInterface';
import { MessageType } from '../../enums/MessageType.enum';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Message[] = [];
  private nextId: number = 1;

  get activeMessages(): Message[] {
    return this.messages;
  }

  private addMessage(text: string, type: MessageType = MessageType.INFO): void {
    const newMessage: Message = {
      id: this.nextId++,
      text,
      type
    };
    this.messages.push(newMessage);

    setTimeout(() => {
      this.closeMessage(newMessage.id);
    }, 5000);
  }

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
    this.messages = this.messages.filter((msg: Message): boolean => msg.id !== id);
  }
}