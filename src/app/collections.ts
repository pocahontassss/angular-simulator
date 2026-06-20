export class Collection<T> {
  private items: T[] = []


  // 1 получить все элементы коллекции

  getAll(): T[] {
    return this.items;
  }

  // 2 получить определенный элемент коллекции

  getItem(index: number): T | undefined {
    return this.items[index];
  }

  // 3 очистить коллекцию

  clearCollection(): void {
    this.items = []
  }

  // 4 удалить определенный элемент коллекции

  removeItem(index: number): void {
    if (index >= 0 && index < this.items.length){
      this.items.splice(index, 1)
    }
  }

  // 5 заменить определенный элемент коллекции

  replaceItem(index: number, newItem: T): void {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = newItem;
    }
  }
}

