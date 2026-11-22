import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  imports: [FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  protected location = '';
  protected hikeDate = '';
  protected participants = '';
  protected liveText = '';
}
