import { Component } from '@angular/core';
import { NgTemplateOutlet, NgClass, AsyncPipe } from '@angular/common';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgTemplateOutlet, NgClass, AsyncPipe],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  constructor(public messageService: MessageService) { }
}
