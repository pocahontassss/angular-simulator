import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyLog: string = 'Румтибет';
  constructor() {
    this.saveDateLastVisit();
    this.saveVisitCount();
  }

  isPrimaryColor(color: Color): boolean {
    const isColorArr = [Color.RED, Color.GREEN, Color.BLUE];
    return isColorArr.includes(color);
  }

  saveDateLastVisit(): void {
    const currenDate = new Date().toISOString();
    localStorage.setItem('lastVisit', currenDate);
  }

  saveVisitCount(): void {
    let count = Number(localStorage.getItem('visitCount')) || 0;
    count++;
    localStorage.setItem('visirCount', count.toString());
  }
}
