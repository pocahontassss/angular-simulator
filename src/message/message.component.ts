import { Component, inject } from '@angular/core';
import { IMessage } from '../interfaces/IMessage';
import { MessageService } from '../classes/message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark, IconDefinition, faEnvelope } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-message',
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {

  faCircleXmark: IconDefinition = faCircleXmark;
  faEnvelope: IconDefinition = faEnvelope;

  private messageService: MessageService = inject(MessageService);

  messages$: Observable<IMessage[]> = this.messageService.messages$;

  closeMessage(message: IMessage): void {
    this.messageService.closeMessage(message);
  }

}
