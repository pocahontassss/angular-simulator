import { Component, inject } from '@angular/core';
import { LoaderService } from '../../../loader.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loader-spiner',
  imports: [AsyncPipe],
  templateUrl: './loader-spiner.component.html',
  styleUrl: './loader-spiner.component.scss',
})
export class LoaderSpinerComponent {

  loaderService: LoaderService = inject(LoaderService);

}
