import { Component, inject } from '@angular/core';
import { LoaderService } from '../app/services/loader.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [AsyncPipe],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})

export class LoaderComponent {

  private loaderService: LoaderService = inject(LoaderService);
  loader$: Observable<boolean> = this.loaderService.loader$;

}
