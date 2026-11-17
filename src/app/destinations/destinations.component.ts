import { Component, output } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss',
})
export class DestinationsComponent {
  public readonly showMessage = output<string>();

  protected readonly destinations = [
    { id: 1, title: 'Озеро возле гор', description: 'романтическое приключение', price: 480, rating: '4.9', image: '/images/destination-lake.png' },
    { id: 2, title: 'Ночь в горах', description: 'в компании друзей', price: 500, rating: '4.5', image: '/images/destination-night.png' },
    { id: 3, title: 'Растяжка в горах', description: 'для тех, кто заботится о себе', price: 230, rating: '5.0', image: '/images/destination-rock.png' },
  ];
}
