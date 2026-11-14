import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <p>© 2026 Компания «ГОРНЫЙ СЛЕД». Все права защищены.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: #0b2638; color: #9ca3af; padding: 24px 0; text-align: center; margin-top: auto; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
  `]
})
export class FooterComponent {}