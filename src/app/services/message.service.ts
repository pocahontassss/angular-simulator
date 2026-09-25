import { Injectable } from '@angular/core';
import { IMessage } from '../../interfaces/IService';
import { MessageType } from '../../enums/message-type.enum';
import { StorageService } from '../../interfaces/localStorage.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private _messages$ = new BehaviorSubject<IMessage[]>([]);
  private readonly STORAGE_KEY = 'active-notifications';

  public readonly messages$: Observable<IMessage[]> = this._messages$.asObservable();

  constructor(private storageService: StorageService) {
    const storedMessages = storageService.getItem<IMessage[]>(this.STORAGE_KEY) || [];
    this._messages$.next(storedMessages);
    storedMessages.forEach(msg => this.startDestroyerTimer(msg.id));
  }

  public showWarn(text: string): void {
    this.addMessage(text, MessageType.WARN);
  }

  public showInfo(text: string): void {
    this.addMessage(text, MessageType.INFO);
  }

  public showSuccess(text: string): void {
    this.addMessage(text, MessageType.SUCCESS);
  }

  public showError(text: string): void {
    this.addMessage(text, MessageType.ERROR);
  }

  private addMessage(text: string, type: MessageType): void {
    const id = Date.now();
    const newMessage: IMessage = {
      id: id,
      text: text,
      type: type
    }
    const updatedMessages = [newMessage, ...this._messages$.value];
    this._messages$.next(updatedMessages);
    this.saveToStorage(updatedMessages);
    this.startDestroyerTimer(id);
  }

  public closeMessage(id: number) {
    const updatedMessages = this._messages$.value.filter(msg => msg.id !== id);
    this._messages$.next(updatedMessages);
    this.saveToStorage(updatedMessages);
  }

  private saveToStorage(messages: IMessage[]): void {
    this.storageService.setItem<IMessage[]>(this.STORAGE_KEY, messages);
  }

  private startDestroyerTimer(id: number): void {
    setTimeout(() => {
      this.closeMessage(id);
    }, 5000)
  }
}