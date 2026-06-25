export class Collection<T> {
  items: T[] = [];
  getAll(): T[] {
    return this.items;
  }
  getOne(index: number): T {
    return this.items[index];
  }
  clear(): void {
    this.items = [];
  }
  deleteOne(index: number): void {
    this.items.splice(index, 1);
  }
  replaceOne(index: number, newItem: T): void {
    this.items[index] = newItem;
  }
  constructor(data: T[]) {
    this.items = data;
  }
}
