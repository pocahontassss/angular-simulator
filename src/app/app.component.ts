import { Component } from '@angular/core';
import './training';
import { Colors } from '../enums/Color';
import './Colection'


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  companyName: String = 'румтибет'

  rgbColors: Colors[] = [Colors.RED, Colors.GREEN, Colors.BLUE];

  checkMainColor(color: Colors): boolean {
    return this.rgbColors.includes(color);
  }

  saveTimeVisit(): void {
    const timeVisit: Date = new Date()
    localStorage.setItem('time', JSON.stringify(timeVisit))
  };

  saveQuantityVisit(): void {
    const visit: string | null = localStorage.getItem('visit')
    const visitNumber: number = Number(visit || 0) + 1;
    localStorage.setItem('visit', String(visitNumber))
  }

  constructor() {
    this.saveTimeVisit();
    this.saveQuantityVisit();
  }
};