import { Component, OnInit } from '@angular/core';
import { differentColor } from '../enums/Color';
import { Collection } from './collection';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    lastVisitDate: string | null = '';
    visitCount: string | null = null;
    count: number = 0;

    constructor() {
        this.getVisitCount();
    }

    ngOnInit() {
        this.lastVisitDate = localStorage.getItem('lastVisit');
        const currentDate = new Date().toLocaleString();
        localStorage.setItem('lastVisit', currentDate);
        // Вывод даты последнего визита
        console.log("Дата последнего визита:", this.lastVisitDate);

        // Вывод текущего цвета
        console.log("Текущий цвет:", this.currentColor);

        // Вывод результата работы метода getColor
        console.log("Результат проверки цвета:", this.getColor(this.currentColor));

        // --- Проверка нашей коллекции ---
        const boots = ['nike', 'adidas', 'puma'];
        const bootsList = new Collection<string>();
        bootsList.collection = boots;

        console.log(bootsList.getAllElements());
        console.log(bootsList.getOneElement(2));
        bootsList.replaceElement(1, 'li-ning');
        bootsList.deleteElement(1);
        console.log(bootsList.getAllElements());
        bootsList.clearCollection();

        // --- Проверка второй коллекции ---
        const prices = [1500, 2300, 4100];
        const pricesList = new Collection<number>();
        pricesList.collection = prices;

        console.log("Вторая коллекция:", pricesList.getAllElements());
        console.log("Элемент по индексу 0:", pricesList.getOneElement(0));
        pricesList.replaceElement(2, 5000);
        console.log("После замены:", pricesList.getAllElements());
        pricesList.deleteElement(0);
        console.log("После удаления:", pricesList.getAllElements());
        pricesList.clearCollection();
    }
    currentColor: differentColor = differentColor.BLUE;
    getColor(color: differentColor): boolean {
        if (
            color === differentColor.BLUE ||
            color === differentColor.RED ||
            color === differentColor.GREEN
        ) {
            return true;
        }
        return false;
    }
    getVisitCount() {
        this.count = Number(localStorage.getItem('visitCount'));
        this.count++;
        localStorage.setItem('visitCount', String(this.count));
    }
}
