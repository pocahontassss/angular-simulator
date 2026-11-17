import { Component, output } from '@angular/core';

@Component({
  selector: 'app-travel-blog',
  templateUrl: './travel-blog.component.html',
  styleUrl: './travel-blog.component.scss',
})
export class TravelBlogComponent {
  public readonly showMessage = output<string>();

  protected readonly articles = [
    { id: 1, title: 'Красивая Италия, какая она в реальности?', image: '/images/blog-italy.png', description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.' },
    { id: 2, title: 'Долой сомнения! Весь мир открыт для вас!', image: '/images/blog-plane.png', description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...' },
    { id: 3, title: 'Как подготовиться к путешествию в одиночку?', image: '/images/blog-street.png', description: 'Для современного мира базовый вектор развития предполагает.' },
    { id: 4, title: 'Индия ... летим?', image: '/images/blog-india.png', description: 'Для современного мира базовый.' },
  ];
}
