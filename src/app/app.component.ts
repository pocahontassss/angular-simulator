import { Component } from '@angular/core';
import { Colors } from '../enums/color';
import { tourCollection } from '../collection';
import { memberCollection } from '../collection';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'РУМТИБЕТ';
  tours = tourCollection;
  members = memberCollection;

  public isCurrentColor(color: Colors): boolean {
    if (color === Colors.GREEN || color === Colors.BLUE || color === Colors.RED) {
      return true;
    }
    return false;
  }

  private saveLastVisitDate(): void {
    const currentDate = new Date().toLocaleString();
    localStorage.setItem('lastVisit', currentDate);
  }

  private saveVisitCount(): void {
    const savedCount = localStorage.getItem('visitCount');

    const currentCount = savedCount ? parseInt(savedCount, 10) : 0;

    const newCount = currentCount + 1;

    localStorage.setItem('visitCount', newCount.toString());
  }

  constructor() {
    this.saveLastVisitDate();
    this.saveVisitCount();
  }
}
