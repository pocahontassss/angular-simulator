import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../../assets/services/MessageService';

export interface Message {
  id: number;
  text: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="messages-container">
      @for (msg of messages; track msg.id) {
        <div class="toast-message" [ngClass]="'toast-' + msg.type">
          <span>{{ msg.text }}</span>
          <button (click)="close(msg.id)">×</button>
        </div>
      }
    </div>
  `,
  styles: [`
    .messages-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .toast-message {
      padding: 12px 20px;
      border-radius: 6px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 250px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .toast-success { background-color: #2e7d32; }
    .toast-error { background-color: #c62828; }
    .toast-warning { background-color: #ef6c00; }
    .toast-info { background-color: #1565c0; }
    .toast-message button {
      background: none;
      border: none;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      margin-left: 15px;
    }
  `]
})
export class MessageComponent {
  private messageService = inject(MessageService);

  get messages(): Message[] {
    return this.messageService.activeMessages;
  }

  close(id: number): void {
    this.messageService.closeMessage(id);
  }
}