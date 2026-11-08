import { Component, inject } from '@angular/core';
import { LoaderService } from '../loader.service';
import { AsyncPipe } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-loader',
  imports: [AsyncPipe],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {

  loader: LoaderService = inject(LoaderService);

  constructor() {
    this.loader.loader$.pipe(
      tap((value) => {
        if (value) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.removeProperty('overflow');
        }
      })
    ).subscribe();
  }



}
