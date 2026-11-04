import { Component, inject } from '@angular/core';
import { MessagesService } from '../../services/messages/messages.service';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { IMessage } from '../../interfaces/interfaces';

@Component({
  selector: 'app-messages',
  imports: [NgTemplateOutlet, AsyncPipe],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent {
  messagesService: MessagesService = inject(MessagesService);

  messages$ = this.messagesService.activeMessages$;
}
