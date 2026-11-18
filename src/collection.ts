export class Collection<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  getItem(index: number): T {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

  remove(index: number): void {
    this.items.splice(index, 1);
  }

  replace(index: number, newItem: T): void {
    this.items[index] = newItem;
  }
}
