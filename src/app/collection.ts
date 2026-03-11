export class Collection<T> {
  private items: T[] = [];

  constructor(initialData: T[] = []) {
    this.items = [...initialData];
  }

  getAll(): T[] {
    return [...this.items];
  }

  get(index: number): T | undefined {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

  remove(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  replace(index: number, newItem: T): void {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = newItem;
    }
  }
}

const numCollection = new Collection([1, 2, 3, 4]);
const strCollection = new Collection(['mountain', 'forest', 'river']);
