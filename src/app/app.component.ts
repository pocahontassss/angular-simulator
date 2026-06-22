import { Colors } from '../enums/Color';
import { Component } from '@angular/core';
import './training';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
companyName = 'РУМТИБЕТ'
isMainColor (color : Colors ): boolean {                                                                      
      if (color === Colors.Red || color === Colors.Green || color === Colors.Blue) {                              
        return true;                                                                                              
      } else {                                                                                                    
        return false;                                                                                             
      }     
    }
    countVisits() {
      if (localStorage.getItem('visitCount') === null) {
      localStorage.setItem('visitCount', '1')
      } else {
      let count = Number(localStorage.getItem('visitCount'));
      count = count + 1;
      localStorage.setItem('visitCount', String(count));
      }
    }
    saveLastVisit() {localStorage.setItem('lastVisit', new Date().toString())}
    constructor() {
      console.log (this.isMainColor(Colors.Red))
      console.log (this.isMainColor(Colors.Yellow))
      this.saveLastVisit()
      this.countVisits()
    }
}
