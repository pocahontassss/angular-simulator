import { Component } from '@angular/core';
import {
  calc,
  uploadStatus,
  textFormat,
  user,
  formatText,
  removeSymbol,
  users,
  adults,
} from './training';
import type { UploadStatus, TextFormat, IUser, Iuser } from './training';

console.log(calc(67, 67));
console.log(uploadStatus);
console.log(textFormat);
console.log(
  `Меня зовут ${user.name}, мне ${user.age} лет, я живу в городе ${user.city}, страна ${user.country}.`,
);
console.log(formatText(' HELLO WORLD', 'lowercase'));
console.log(removeSymbol('Hello World', 'o'));
console.log(users);
console.log(adults);

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
