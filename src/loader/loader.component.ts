import { AsyncPipe } from '@angular/common';
import { Component,inject } from '@angular/core';
import { LoaderService } from '../classes/loader.service';
import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-loader',
  imports: [AsyncPipe, FontAwesomeModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {

  private loaderService: LoaderService = inject(LoaderService);
  faSpinner: IconDefinition = faSpinner;

  isLoading$: Observable<boolean> = this.loaderService.isLoading$;

}
