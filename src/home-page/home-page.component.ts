import { Component, inject } from '@angular/core';
import { IProgram } from '../app/interfaces/IProgram';
import { IBlog } from '../app/interfaces/IBlog';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../app/services/message.service';
import { faCalendar, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShieldHalved, faTag, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})

export class HomePageComponent {

  messageService: MessageService = inject(MessageService);

  companySlogan: string = 'Насладись прогулкой в горах';
  continuationSlogan: string = 'с командой единомышленников';

  selectedLocation: string = '';
  selectedDate: string = '';
  participantsCount: string = '';
  liveInputValue: string = '';
  hoveredImageIndex: number | null = null;

  programs: IProgram[] = [
    {
      id: 1,
      icon: faPeopleGroup,
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      icon: faShieldHalved,
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации',
    },
    {
      id: 3,
      icon: faTag,
      title: 'Лояльные цены',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации',
    },
  ];

  blogs: IBlog[] = [
    {
      id: 1,
      icon: 'italia',
      title: 'Красивая Италия, какая она в реальности?',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023',
      button: 'читать статью',
    },
    {
      id: 2,
      icon: 'fly',
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: '01/04/2023',
      button: 'читать статью',
    },
    {
      id: 3,
      icon: 'street',
      title: 'Как подготовиться к путешествию в одиночку?',
      description: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023',
      button: 'читать статью',
    },
    {
      id: 4,
      icon: 'india',
      title: 'Индия ... летим?',
      description: 'Для современного мира базовый.',
      date: '01/04/2023',
      button: 'читать статью',
    },
  ];

  offerImages: string[] = ['coffee', 'men', 'moto', 'valley'];
  priceCard: string[] = ['lake', 'starry_sky', 'stone'];
  pinterestFoto: string[] = ['balloons', 'map', 'hotel', 'beach', 'canyon', 'camera'];

  calendarIcon: IconDefinition = faCalendar;
  playIcon: IconDefinition = faCirclePlay;

  isFormInvalid(): boolean {
    return (
      this.selectedLocation === '' || this.selectedDate === '' || this.participantsCount === ''
    );
  }

  openDatePicker(input: HTMLInputElement): void {
    input.showPicker();
  }

}
