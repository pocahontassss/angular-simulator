export class Collection<T> {

  private items: T[] = [];

  constructor(initialItems: T[] = []) {
    this.items = initialItems;
  }

  getAll(): T[] {
    return this.items;
  }

  getOne(index: number): T | undefined {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

  remove(index: number): void {
    this.items.splice(index, 1);
  }

  replace(index: number, item: T): void {
    this.items[index] = item;
  }

}