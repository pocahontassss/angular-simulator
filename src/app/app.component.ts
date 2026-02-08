import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {

  companyName: string = "румтибет";

  isPrimaryColor(color: Color): boolean {
    return [Color.RED, Color.GREEN, Color.BLUE].includes(color);
  }

  saveLastVisitDate(): void {
    localStorage.setItem('visiting-time', new Date().toString())
  }

  incrementVisitCounter(): void {
    const storedVisitCount: string | null = localStorage.getItem('visit-counter');

    let currentVisitCount: number;

    if (storedVisitCount === null) {
     currentVisitCount = 1;
    } else {
      currentVisitCount = Number(storedVisitCount) + 1;
    }

    localStorage.setItem('visit-counter', currentVisitCount.toString());
  }

  constructor() {
    this.isPrimaryColor(Color.BLUE);
    this.saveLastVisitDate();
    this.incrementVisitCounter();
  }
}
