export class Collection<T> {
  private items: T[] = [];

  constructor(items: T[]) {
    this.items = items;
  }

  getAllItems(): T[] {
    return this.items;
  }

  getItem(value: T): T | undefined {
    return this.items.find(item => item === value);
  }

  clearAllItems(): void {
    this.items.length = 0;
  }

  deleteItem(value: T): void {
    let index = this.items.findIndex(item => item === value);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  replaceItem(replaceIndex: number, deleteValue: number, setValue: T): T[] {
    return this.items.splice(replaceIndex, deleteValue, setValue)
  }
}