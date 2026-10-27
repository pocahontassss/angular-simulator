export class Collection<T> {
  private items: T[] = [];
  constructor(initialData: T[] = []) {
    this.items = initialData;
  }
  getAll(): T[] {
    return this.items;
  }
  get(index: number): T | undefined {
    return this.items[index];
  }
  clear(): void {
    this.items = [];
  }
  remove(index: number): void {
    this.items.splice(index, 1);
  }
  replace(index: number, newItem: T): void {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = newItem;
    }
  }
}