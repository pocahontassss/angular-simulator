export class Collection<T> {
  private items: T[] = [];

  public getAll(): T[] {
    return this.items;
  }
  public getByIndex(index: number): T {
    return this.items[index];
  }

  public clear() {
    this.items = [];
  }

  public removeByIndex(index: number) {
    this.items.splice(index, 1);
  }
  public replaceByIndex(index: number, newItem: T) {
    this.items[index] = newItem;
  }
}

const tourCollection = new Collection<string>();

export interface Guide {
  id: number;
  name: string;
  rating: number;
}

const guideCollection = new Collection<Guide>();
