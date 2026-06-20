import { Component, ɵresetIncrementalHydrationEnabledWarnedForTests } from '@angular/core';
import { user } from './training';
import { Colors } from '../enum/Color';
import { HttpTestingController } from '@angular/common/http/testing';
import { timestamp } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isPrimaryColors(color: Colors): boolean {
    if (color === Colors.BLUE || Colors.GREEN || Colors.RED) {
      return true;
    } else {
      return false;
    };
  };

  testColors() {
    console.log(this.isPrimaryColors(Colors.BLUE))
    console.log(this.isPrimaryColors(Colors.GREEN))
    console.log(this.isPrimaryColors(Colors.RED))
  };

  constructor() {
    this.saveSunsetTime();
    this.quantityVisitToSite();
  }

  saveSunsetTime(): void {
    const time = new Date();
    const timeString = time.toISOString();
    localStorage.setItem('last_visit_time', timeString)
  }

  quantityVisitToSite(): void {
    const storageKey = 'visit_to_site';
    const currentVisitToSite = localStorage.getItem(storageKey);

    let newCount: number;

    if ( currentVisitToSite === null) {
      newCount = 1;
    } else {
      newCount = parseInt(currentVisitToSite, 10) + 1;
    }

    localStorage.setItem(storageKey, newCount.toString());
    
    console.log(`Кол-во заходов ${newCount}`);
  }

};


console.log(user);