import { Injectable } from '@angular/core';
import { messageStatus } from '../../enums/messageStatus';
import { IMessage } from '../../interfaces/interfaces';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private _activeMessagesSub: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([]);

  readonly activeMessages$: Observable<IMessage[]> = this._activeMessagesSub.asObservable();

  private addMessage(messageObj: Omit<IMessage, 'id'>): void {
    const generatedId = Date.now();
    this._activeMessagesSub.next([
      { id: generatedId, status: messageObj.status, text: messageObj.text },
      ...this._activeMessagesSub.value,
    ]);

    setTimeout(() => this.closeMessage(generatedId), 5000);
  }

  closeMessage(id: number): void {
    const message = this._activeMessagesSub.value.find((m) => m.id === id);

    if (!message) return;

    message.isClosing = true;

    setTimeout(() => {
      this._activeMessagesSub.next(
        this._activeMessagesSub.value.filter((message) => message.id !== id),
      );
    }, 500);
  }

  showWarn(message: string): void {
    this.addMessage({ status: messageStatus.WARN, text: message });
  }

  showError(message: string): void {
    this.addMessage({ status: messageStatus.ERROR, text: message });
  }

  showSuccess(message: string): void {
    this.addMessage({ status: messageStatus.SUCCESS, text: message });
  }

  showInfo(message: string): void {
    this.addMessage({ status: messageStatus.INFO, text: message });
  }
}
