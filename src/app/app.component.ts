import { Component } from '@angular/core';
import './training' 
import { Colors } from '../enums/Color';
import { Collection } from './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'румтибет'

  mainColors = [Colors.RED, Colors.BLUE, Colors.GREEN]

  constructor() {
    this.saveLastLogin();
    this.saveQuantityLogin();
    this.isMainColors(Colors.ORANGE)
  }

  saveLastLogin(): void {
    const lastLog: string = new Date().toString();
    localStorage.setItem('lastLoginDate', lastLog);
  }

  saveQuantityLogin(): void {
    let localStorageResult = localStorage.getItem('loginQuantity');
    let loginCount: number

    if (localStorageResult === null) {
      loginCount = 1;
    } else {
      loginCount = JSON.parse(localStorageResult);
      loginCount++
    }
    
    const loginCountResult = loginCount.toString();
    localStorage.setItem('loginQuantity', loginCountResult);
  }

  isMainColors(color: Colors):boolean {
    return this.mainColors.includes(color);
  }
}

const stringCollection = new Collection<string>(['Яблоко', 'Апельсин', 'Виноград']);
stringCollection.replaceItem(0, 1, 'Мандарин');
console.log(stringCollection.getAllItems());


const numberCollection = new Collection<number>([1, 2, 3, 4, 5]);
numberCollection.deleteItem(1);
console.log(numberCollection.getAllItems());
