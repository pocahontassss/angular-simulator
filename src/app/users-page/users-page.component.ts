import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {
  protected readonly users = [
    { id: 1, name: 'Алексей' },
    { id: 2, name: 'Мария' },
    { id: 3, name: 'Иван' },
  ];

  constructor(protected readonly messageService: MessageService) {}
}
