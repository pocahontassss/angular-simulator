import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="not-found">
      <h1>404</h1>
      <p>К сожалению, запрашиваемая страница не найдена.</p>
      <a routerLink="/" class="back-btn">Вернуться на главную</a>
    </section>
  `,
  styles: [`
    .not-found { text-align: center; padding: 80px 20px; }
    h1 { font-size: 72px; color: #0b2638; margin-bottom: 10px; }
    p { color: #6b7280; margin-bottom: 24px; }
    .back-btn { background: #0b2638; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px; }
  `]
})
export class NotFoundComponent {}