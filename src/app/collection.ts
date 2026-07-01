export class Collection<T> {
  private items: T[];

  constructor(initialItems: T[] = []) {
    this.items = [...initialItems];
  }

  getAll(): T[] {
    return [...this.items];
  }

  getItem(index: number): T | undefined {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

  removeItem(index: number): boolean {
    console.log('removeItem вызван, index:', index, 'items до', this.items);

    if (index < 0 || index >= this.items.length) {
      console.log('Индекс невалидный, удаление отменено');
      return false;
    }

    this.items.splice(index, 1);
    console.log('Элемент удалён, items после:', this.items);

    return true;
  }

  replaceItem(index: number, newItem: T): boolean {
    if (index < 0 || index >= this.items.length) {
      return false;
    }
    this.items[index] = newItem;
    return true;
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  get size(): number {
    return this.items.length;
  }
}
