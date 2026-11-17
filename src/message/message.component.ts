import { Component, inject } from '@angular/core';
import { MessageService } from '../app/services/message.service';
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { Observable } from 'rxjs';
import { IMessage } from '../app/interfaces/IMessage';
import { faXmarkCircle, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-message',
  imports: [NgTemplateOutlet, NgClass, AsyncPipe, FontAwesomeModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})

export class MessageComponent {

  messageService: MessageService = inject(MessageService);
  messages$: Observable<IMessage[]> = this.messageService.messages$;

  deleteIcon: IconDefinition = faXmarkCircle;
  mailIcon: IconDefinition = faEnvelope;

}
