import { Component, inject } from '@angular/core';
import { LoaderService } from '../../../loader.service';
import { AsyncPipe } from '@angular/common';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-loader-spiner',
  imports: [AsyncPipe],
  templateUrl: './loader-spiner.component.html',
  styleUrl: './loader-spiner.component.scss',
})
export class LoaderSpinerComponent {

  loaderService: LoaderService = inject(LoaderService);

  isLoading$: Observable<boolean> = this.loaderService.isLoading$.pipe(
    tap(isLoading => {
      document.body.style.overflow = isLoading ? 'hidden' : '';
    })
  );

}
