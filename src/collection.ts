export class Collection<T> {

  items: T[] = [];

  constructor(items: T[]) {
    this.items = items;
  }

  getAll(): T[] {
    return this.items;
  }

  getByIndex(index: number): T | undefined {
    return this.items[index];
  }

  clearCollection(): void {
    this.items = [];
  }

  remove(index: number): void {
    this.items.splice(index, 1);
  }

  replace(index: number, newValue: T): void {
    this.items[index] = newValue;
  }

}
