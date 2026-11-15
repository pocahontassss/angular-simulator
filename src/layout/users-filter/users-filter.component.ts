import { Component, DestroyRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ISearchForm } from '../../interfaces/interfaces';

@Component({
  selector: 'app-users-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.scss',
})
export class UsersFilterComponent implements OnInit {

  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
  searchBuilder: NonNullableFormBuilder = inject(FormBuilder).nonNullable;
  searchControl: FormGroup<ISearchForm> = this.searchBuilder.group<ISearchForm>({
    searchByName: this.searchBuilder.control(''),
  });
  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.searchControl.controls.searchByName.valueChanges
      .pipe(
        debounceTime(200),
        map((value) => (value ?? '').trim().toLowerCase()),
        distinctUntilChanged(),
        tap((value) => this.searchChange.emit(value)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

}
