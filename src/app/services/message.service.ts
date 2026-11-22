import { Injectable, OnDestroy } from '@angular/core';
import { Message, MessageType } from '../models/message';

@Injectable({ providedIn: 'root' })
export class MessageService implements OnDestroy {
  private messageList: Message[] = [];
  private timers = new Map<number, ReturnType<typeof setTimeout>>();
  private nextId = 0;

  public get messages(): readonly Message[] {
    return this.messageList;
  }

  public showWarn(text: string): void {
    this.addMessage(text, MessageType.Warning);
  }

  public showError(text: string): void {
    this.addMessage(text, MessageType.Error);
  }

  public showSuccess(text: string): void {
    this.addMessage(text, MessageType.Success);
  }

  public showInfo(text: string): void {
    this.addMessage(text, MessageType.Info);
  }

  public closeMessage(id: number): void {
    const timer = this.timers.get(id);
    if (timer !== undefined) {
      clearTimeout(timer);
      this.timers.delete(id);
    }
    this.messageList = this.messageList.filter((message) => message.id !== id);
  }

  public ngOnDestroy(): void {
    this.timers.forEach((timer) => clearTimeout(timer));
    this.timers.clear();
  }

  private addMessage(text: string, type: MessageType): void {
    const message: Message = { id: ++this.nextId, text, type };
    this.messageList.unshift(message);

    const timer = setTimeout(() => this.closeMessage(message.id), 5000);
    this.timers.set(message.id, timer);
  }
}
