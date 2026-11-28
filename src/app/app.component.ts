import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import { Collection } from './Collection';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = "Р У М Т И Б Е Т"
dateInput: any;

isPrimaryColor(color: Color):boolean {
  if (color === Color.Red || color === Color.Blue || color === Color.Green) {
    return true
  }
  return false
}

saveLastVisitDate(): void {
  const now = new Date().toLocaleString();
  localStorage.setItem('lastVisitDate', now )
}
incremenVisitCount():void {
  const savedCount = localStorage.getItem('visitCount');
  const currentCount = savedCount ? Number(savedCount) + 1 : 1 ;
  localStorage.setItem('visitCount', currentCount.toString())
}

constructor() {
  this.saveLastVisitDate();
  this.incremenVisitCount();

  const  locations = new Collection<string>(["Горный Алтай","Хибины","Ергаки"]);
  console.log('все локации -->', locations.getAll());
  console.log('вторая локация', locations.getItem(1));
  locations.replaceItem(0, 'Северный Кавказ');
  locations.removeItem(2);
  console.log('После замены -->', locations.getAll());
  locations.clear();

  const tours = new Collection<{ id: number; price: number}> ([
    {id: 1, price: 2280},
    {id: 2, price: 3350}
  ])

  console.log('все наши туры -->', tours.getAll());
  tours.replaceItem(0, {id: 1, price: 99900});
  console.log('Обновленный тур! -->', tours.getAll())
   

} }