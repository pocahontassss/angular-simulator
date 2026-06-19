import { Component, inject } from '@angular/core';
import { ShowMessageService } from '../services/show-message-service';
import { IMessage } from '../../interfaces/IMessage';
import { CommonModule } from '@angular/common';
import { DecimalPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-toast-messages',
  imports: [CommonModule, NgTemplateOutlet],
  templateUrl: './toast-messages.html',
  styleUrl: './toast-messages.scss',
})
export class ToastMessages {
  private showMessageService: ShowMessageService = inject(ShowMessageService);
  
  constructor() {}
  
  public get messages() {
    return this.showMessageService.activeMessages;
  }
  
  public deleteMsg(id: number): void {
    this.showMessageService.deleteMessage(id);
  }
}
