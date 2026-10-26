export class Collection<T> {

  private items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  getAll(): T[] {
    return this.items;
  }

  getItem(index: number): T | undefined {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

  removeItem(index: number): void {
    this.items = this.items.filter(
      (_item: T, itemIndex: number): boolean => itemIndex !== index
    );
  }
  
  replaceItem(index: number, newItem: T): void {
    this.items = this.items.map(
      (item: T, itemIndex: number): T => {
        if (itemIndex === index) {
          return newItem;
        }

        return item;
      }
    );
  }

}