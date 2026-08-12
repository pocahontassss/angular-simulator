import { Component, inject, OnInit } from '@angular/core';
import { CreateUserComponent } from '../create-user/create-user.component';
import { IUser } from '../interfaces/IUser';
import { UserService } from '../classes/user.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, map, Observable, tap } from 'rxjs';
import { UsersFilterComponent } from '../users-filter/users-filter.component';
import { AsyncPipe } from '@angular/common';
import { MessageService } from '../classes/message.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowsRotate, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CustomPluralPipe } from '../pipes/custom-plural.pipe';
import { PhoneMode } from '../enums/PhoneMode';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PhoneModesService } from '../classes/phone-modes.service';

@Component({
  selector: 'app-users-page',
  imports: [
    CreateUserComponent,
    UserCardComponent,
    FormsModule,
    UsersFilterComponent,
    AsyncPipe,
    FontAwesomeModule,
    CustomPluralPipe,
    SelectButtonModule,
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent implements OnInit {

  private userService: UserService = inject(UserService);
  private messageService: MessageService = inject(MessageService);
  phoneModesService: PhoneModesService = inject(PhoneModesService);

  faArrowsRotate: IconDefinition = faArrowsRotate;
  private filterSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  users$: Observable<IUser[]> = this.userService.users$;
  users: IUser[] = [];

  ngOnInit(): void {
    this.userService
      .loadUsers()
      .pipe(
        tap((users: IUser[]) => {
          this.userService.setUsers(users);
          this.messageService.showSuccess(`Загружены пользователи (${ users.length })`);
        }),
      )
      .subscribe();
  }

  filteredUsers$: Observable<IUser[]> = combineLatest([this.users$, this.filterSubject]).pipe(
    map(([users, filter]: [IUser[], string]) =>
      users.filter((user: IUser) => user.name.trim().toLowerCase().includes(filter)),
    ),
  );

  onFilterUser(value: string): void {
    this.filterSubject.next(value);
  }

  onCreateUser(user: IUser): void {
    this.userService.addUser(user);
  }

  onDeleteUser(userId: number): void {
    this.userService.deleteUserById(userId);
  }

  refreshUsers(): void {
    this.userService
      .loadUsers()
      .pipe(tap((user: IUser[]) => this.userService.setUsers(user)))
      .subscribe();
  }

}
