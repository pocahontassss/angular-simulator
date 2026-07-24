export class Collection<T> {
  private items: T[] = [];

  getItems() {
    return this.items;
  };

   oneItems(index: number) {
    return this.items[index];
  };

  deletItems() {
    this.items = [];
  };

  deletOneItems(index: number) {
    return this.items.splice(index, 1);
  };

  replaceByIndex(index: number, newItem: T) {
    this.items[index] = newItem;
  };
}

const oneCollection = new Collection <string>();

  export interface Car {
    model: string;
    power: number;
  }

  const carCollection = new Collection<Car>();