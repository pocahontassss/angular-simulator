import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  imports: [AsyncPipe],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  loaderService: LoaderService = inject(LoaderService);

  isLoading$ = this.loaderService.isLoading$;

  constructor() {
    this.isLoading$.subscribe((isLoading) => {
      document.body.style.overflow = isLoading ? 'hidden' : 'auto';
    });
  }
  
}
