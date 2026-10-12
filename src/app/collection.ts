const products: string[] = ['apple', 'orange', 'pea', 'strawberry'];
const numbers: number[] = [10, 15, 34, 58, 99];

class Collection<T> {
  private items: T[] = [];

  constructor(items: T[]) {
    this.items = items;
  }

  getAll(): T[] {
    return this.items
  }

  getSpecificItem(index: number): T {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

  clearSpecificItem(index: number): void {
    this.items.splice(index, 1);
  }

  replaceSpecificItem(index: number, newItem: T): void {
    this.items[index] = newItem;
  }
}

const productsCollection: Collection<string> = new Collection<string>(products);
productsCollection.getSpecificItem(2);

const numbersCollection: Collection<number> = new Collection<number>(numbers);
numbersCollection.replaceSpecificItem(4, 100);
numbersCollection.getAll();