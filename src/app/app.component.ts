import { Color } from '../enums/Color';
import { Component, inject, OnDestroy } from '@angular/core';
import { Collection } from '../collection';
import { HikeCard } from './interfaces/HikeCard';
import { FormsModule } from '@angular/forms';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { DestinationsCard } from './interfaces/DestinationsCard';
import { ImpressionCard } from './interfaces/ImpressionCards';
import { MessageManagementService } from './servis/message-management.service';
import { LocalStorageService } from './servis/local-storage.service';
import { MessageType } from '../enums/MessagesType';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgClass,NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {

  messageService:MessageManagementService = inject(MessageManagementService);
  LocalStorageService: LocalStorageService = inject(LocalStorageService);
  
  locationTour: string = '';
  dataTrip!: string;
  numberParticipants: string = '';
  valueTimeDate!: string;
  timeUpdate!: any;
  writtenText!: string;
  companyName: string = 'румтибет';
  isLoading: boolean = false;
  changingValue: boolean = true;
  numberClicks: number = 0;
  
  hikecards: HikeCard[] = [
    {
      id: 1,
      image: '/images/icon/opt-guide.svg',
      name: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 2,
      image: '/images/icon/safe-hiking.svg',
      name: 'Безопасный поход',
      description:'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 3,
      image: '/images/icon/loyal-prices.svg',
      name: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    }
  ]

  destinationsCards: DestinationsCard[] = [
    {
      id: 1,
      backgroundImage: '/images/photo/lake-near-the-mountains.svg',
      estimationImage:'/images/icon/lake-rating.svg',
      titel:'Озеро возле гор',
      description:'романтическое приключение' ,
      price: 480,
    },
    {
      id: 2,
      backgroundImage: '/images/photo/night-in-mountains.svg',
      estimationImage:'/images/icon/rating-of-night-mountains.svg',
      titel:'Ночь в горах',
      description:'в компании друзей' ,
      price:500,
    },
    {
      id: 3,
      backgroundImage: '/images/photo/stretching-in-mountains.svg',
      estimationImage:'/images/icon/mountain-climbing-rating.svg',
      titel:'Растяжка в горах',
      description:'для тех, кто заботися о себе',
      price: 230,
    }
  ]

  impressionCards: ImpressionCard[] = [
    {
      id: 1,
      image: '/images/photo/city-in-the-mountains.svg',
      titel:'Красивая Италя, какая она в реальности?',
      description:'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
     {
      id: 2,
      image: '/images/photo/aircraft-wing.svg',
      titel:'Долой сомнения! Весь мир открыт для вас!',
      description:'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...'
    },
     {
      id: 3,
      image: '/images/photo/woman-on-the-street.svg',
      titel:'Как подготовиться к путешествию в одиночку?',
      description:'Для современного мира базовый вектор развития предполагает.'
    },
    {
      id: 4,
      image: '/images/photo/mosque-in-India.svg',
      titel:'Индия ... летим?',
      description:'Для современного мира базовый.'
    }
  ]

  constructor() {
    this.saveLastCount();
    this.saveVisitcount();
    this.timeOutput();

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  tourProgramBtnClick() {
    this.messageService.addMessage('Программа недоступна',MessageType.Warn)
  }

  outCostBtnClick() {
    this.messageService.addMessage('Стоимость отправлена на почту', MessageType.Info);
  }

  destinationRatingBtnClick(){
    this.messageService.addMessage('Направления получены',MessageType.Success);
  }

  materialsBtnClick(){
    this.messageService.addMessage('Материалы недоступны',MessageType.Error);
  }

  isPrimaryColor(selectedСolor: Color): boolean {
    if(selectedСolor === Color.BLUE || selectedСolor === Color.GREEN || selectedСolor === Color.RED) {
      return true;
    } else {
      return false;
    }
  }

  ngOnDestroy(): void {
  if (this.timeUpdate) {
    clearInterval(this.timeUpdate); 
  }
}

  subtraction() {
    if(this.numberClicks >0) {
      this.numberClicks -= 1;
    }
  }
  
  addition() {
    this.numberClicks += 1;
  }
  
  switchingTasks() {
    this.changingValue = !this.changingValue; 
  }
  
  private saveLastCount(): void {
    const currentDate = new Date ().toLocaleString(); 
    this.LocalStorageService.set('lastDate', currentDate );
  }
  
  private saveVisitcount(): void {
    const savedCount = this.LocalStorageService.get<number>('visitCount') ?? 0;
    const newCount = savedCount + 1;
    this.LocalStorageService.set('visitCount', newCount);
  }

  private timeOutput():void {
    this.valueTimeDate = new Date().toLocaleString('ru-RU');
    this.timeUpdate  = setInterval (() => {
      this.valueTimeDate = new Date().toLocaleString('ru-RU');
    },1000)
  }

}
