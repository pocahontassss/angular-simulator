import { Component, DestroyRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.scss',
})
export class UsersFilterComponent implements OnInit {
  searchBuilder: FormBuilder = inject(FormBuilder);
  private destroyRef: DestroyRef = inject(DestroyRef);
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  searchControl = this.searchBuilder.group({
    searchByName: [''],
  });

  ngOnInit(): void {
    this.searchControl.controls.searchByName.valueChanges
      .pipe(
        map((value) => (value ?? '').trim().toLowerCase()),
        debounceTime(200),
        distinctUntilChanged(),
        tap((value) => this.searchChange.emit(value)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
