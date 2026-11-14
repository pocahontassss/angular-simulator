import { Component } from '@angular/core';

interface IUser {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    <section class="page-section">
      <h1>Список пользователей</h1>
      <ul class="users-list">
        @for (user of users; track user.id) {
          <li class="user-card">
            <strong>{{ user.name }}</strong> — <span>{{ user.role }}</span>
          </li>
        }
      </ul>
    </section>
  `,
  styles: [`
    .page-section { max-width: 1200px; margin: 40px auto; padding: 0 20px; }
    .users-list { list-style: none; padding: 0; display: grid; gap: 12px; margin-top: 20px; }
    .user-card { padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px; }
  `]
})
export class UsersComponent {
  users: IUser[] = [
    { id: 1, name: 'Влад Бабаенко', role: 'Старший гид' },
    { id: 2, name: 'Низам Мекх', role: 'Координатор туров' },
    { id: 3, name: 'Константин Штребан', role: 'Инструктор' }
  ];
}