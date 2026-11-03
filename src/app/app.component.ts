import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {
  sum,
  formatText,
  user1,
  admin1,
  users,
  filteredUsers,
  usersWithEmails,
  usersStartingWithM,
} from './training';
@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  myResult = sum(15, 25);

  testUpper = formatText('привет, мир', 'uppercase');
  testCapitalize = formatText('пРИВЕТ, мИР', 'capitalize');
  myFilteredUsers = filteredUsers;
  myUsersWithEmails = usersWithEmails;
  myUsersStartingWithM = usersStartingWithM;
}
