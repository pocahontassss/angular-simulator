import { Component, DestroyRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-users-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.scss'
})
export class UsersFilterComponent implements OnInit {

  private destroyRef: DestroyRef = inject(DestroyRef);

  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();

  searchControl: FormControl<string> = new FormControl<string>('', { nonNullable: true });

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap((value: string) => this.filterChange.emit(value)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

}


