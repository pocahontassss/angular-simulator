import { Component, DestroyRef, EventEmitter, inject, Output, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs';

@Component({
  selector: 'app-users-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.scss',
})
export class UsersFilterComponent implements OnInit {

  @Output() usersFiltered: EventEmitter<string> = new EventEmitter<string>();

  private destroyRef: DestroyRef = inject(DestroyRef);

  filterControl: FormControl = new FormControl('');

  ngOnInit() {
    this.filterControl.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map((value: string) => value.trim().toLowerCase()),
        tap((value: string) => this.usersFiltered.emit(value)),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe();
  }

}
