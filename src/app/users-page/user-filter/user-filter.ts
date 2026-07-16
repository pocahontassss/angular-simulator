import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs';

@Component({
  selector: 'app-user-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './user-filter.html',
  styleUrl: './user-filter.scss',
})
export class UserFilter {
  
  @Output()
  public readonly filterChange = new EventEmitter<string>();
  
  public readonly searchControl = new FormControl('', {
    nonNullable: true
  });
  
  constructor() {
    this.searchControl.valueChanges
    .pipe(
      map(value => value.trim().toLowerCase()),
      debounceTime(200),
      distinctUntilChanged(),
      takeUntilDestroyed(),
    ).subscribe(value => {
      this.filterChange.emit(value);
    });
  }
  

}
