import { Injectable } from '@angular/core';
import { IMessage } from '../../interfaces/IMessage';
import { TypeMessages } from '../../enums/TypeMessages';
import { BehaviorSubject, filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowMessageService {
  
  public readonly defaultMessages: IMessage[] = [
    { id: 1, type: TypeMessages.SUCCESS, message: 'Направления получены' },
    { id: 2, type: TypeMessages.INFO, message: 'Стоимость отправлена на почту' },
    { id: 3, type: TypeMessages.WARN, message: 'Программа недоступна' },
    { id: 4, type: TypeMessages.ERROR, message: 'Материалы недоступны' }
  ];
  
  private messageSubject: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([]);
  public readonly message$: Observable<IMessage[]> = this.messageSubject.asObservable();
  
  private nextId = 0;
  
  public showWarn(text: string) {
    this.defaultMessages[2].message = text;
    this.addMessage(this.defaultMessages[2]);
  }
  
  public showError(text: string) {
    this.defaultMessages[3].message = text;
    this.addMessage(this.defaultMessages[3]);
  }
  
  public showSuccess(text: string) {
    this.defaultMessages[0].message = text;
    this.addMessage(this.defaultMessages[0])
  }
  
  public showInfo(text: string) {
    this.defaultMessages[1].message = text;
    this.addMessage(this.defaultMessages[1])
  }
  
  public deleteMessage(id: number) {
    this.messageSubject.next(this.messageSubject.getValue().filter(msg => msg.id !== id));
  }
  
  private addMessage(objMsg: IMessage) {
    const newId: number = this.nextId++;
    
    this.messageSubject.next([...this.messageSubject.getValue(),{id: newId, type: objMsg.type, message: objMsg.message}])
    
    setTimeout(() => this.deleteMessage(newId), 5000);
  }
}
