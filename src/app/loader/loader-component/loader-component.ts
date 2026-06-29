import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader-service';
import { Observable, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loader-component',
  imports: [AsyncPipe],
  templateUrl: './loader-component.html',
  styleUrl: './loader-component.scss',
})
export class LoaderComponent {
  loaderService: LoaderService = inject(LoaderService);
  
  public readonly isLoading$: Observable<boolean> = this.loaderService.loader$;
}
