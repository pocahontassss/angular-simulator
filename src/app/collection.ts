export class Collection<T> {
  private items: T[] = [];

  getAllElements(): T[] {
    return this.items;
  }

  getElement(index: number): T | undefined {
    return this.items[index];
  }

  deleteAllElement(): void {
    this.items = [];
  }

  deleteElement(index: number): void {
    this.items.splice(index, 1);
  }

  changeElement(index: number, changeItem: T): void {
    this.items[index] = changeItem;
  }
};
