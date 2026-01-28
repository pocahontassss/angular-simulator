export class Collection<T> {

  private items: T[] = [];

  constructor(dataSource: T[]) {
    this.items = [...dataSource];
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

  remove(index: number): boolean {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  replace(index: number, newItem: T): boolean {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = newItem;
    return true;
    }
    return false;
  }

}