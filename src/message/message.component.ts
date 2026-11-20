import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ToastService } from '../app/toast.service';
import { IMessage } from '../interfaces/IMessage';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})

export class MessageComponent {

    toastService: ToastService = inject(ToastService);
    messages$: Observable<IMessage[]> = this.toastService.toastMessages;

}
