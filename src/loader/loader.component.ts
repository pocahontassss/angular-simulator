import { Component, HostBinding, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { LoaderService } from '../service/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {

  loaderService: LoaderService = inject(LoaderService);

}