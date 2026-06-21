import { Component } from '@angular/core';
import './training';
import {Colors} from '../enums/Color';
import './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  companyName: string = "РУМТИБЕТ";
  constructor () {
    this.saveLastVisit();
    this.getCountVisit();
  };

  isMainColor(color: Colors): boolean {
    return (color === Colors.redColor || color === Colors.greenColor || color === Colors.blueColor);
  };

  saveLastVisit(): void {
    const currentDate: Date = new Date();
    localStorage.setItem('lastVisit', currentDate.toString());
  };

  getCountVisit(): void {
    let pageViewCount = localStorage.getItem('visitCount');
    if (pageViewCount === null) {
      pageViewCount = "0";
    };

    const newVisitCount: number = +pageViewCount + 1;

    localStorage.setItem('visitCount', newVisitCount.toString());
  };
};


