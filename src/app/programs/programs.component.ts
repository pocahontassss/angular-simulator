import { Component } from '@angular/core';

interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-programs',
  imports: [],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
})
export class ProgramsComponent {
  protected readonly advantages: Advantage[] = [
    {
      id: 1,
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/icons/guide.svg',
    },
    {
      id: 2,
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/icons/safety.svg',
    },
    {
      id: 3,
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/icons/price.svg',
    },
  ];
}
