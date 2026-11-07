export class Collection<T> {

  private items: T[] = [];
  getAll(): T[] {
    return this.items;
  }

  get(index: number): T {
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
