export class Collection<T> {
  private items: T[];

  constructor(source: T[]) {
    this.items = [...source];
  }

  public getAll(): T[] {
    return [...this.items];
  }

  public get(index: number): T | undefined {
    if (!Number.isInteger(index) || index < 0 || index >= this.items.length) {
      return undefined;
    }

    return this.items[index];
  }

  public clear(): void {
    this.items = [];
  }

  public remove(index: number): boolean {
    if (!Number.isInteger(index) || index < 0 || index >= this.items.length) {
      return false;
    }

    this.items.splice(index, 1);
    return true;
  }

  public replace(index: number, item: T): boolean {
    if (!Number.isInteger(index) || index < 0 || index >= this.items.length) {
      return false;
    }

    this.items[index] = item;
    return true;
  }
}
