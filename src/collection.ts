export class Collection<T> {
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items = initialItems;
  }

  public getAll(): T[] {
    return this.items;
  }

  public getByIndex(index: number): T {
    return this.items[index];
  }

  public clear() {
    this.items = [];
  }

  public removeByIndex(index: number) {
    this.items.splice(index, 1);
  }
  public replaceByIndex(index: number, newItem: T) {
    this.items[index] = newItem;
  }
}

const initialTours: string[] = [
  'Дагестан (Сулакский каньон)',
  'Байкал',
  'Камчатка (Долина Гейзеров)',
];

export const tourCollection = new Collection<string>(initialTours);

const initialMembers: string[] = [
  'Григорий (гид)',
  'Гаджи (рилс мейкер)',
  'Лев (Толстой)',
  'Жинкин (лев)',
];

export const memberCollection = new Collection<string>(initialMembers);
