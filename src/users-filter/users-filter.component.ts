import { Component, EventEmitter, Output, DestroyRef, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.scss',
})

export class UsersFilterComponent {

  private destroyRef: DestroyRef = inject(DestroyRef);

  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  searchControl: FormControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    )
      .subscribe((value: string) => {
        this.searchChange.emit(value);
    });
  }

}
