export class Collection<T> {
  private collection: T[];
  constructor(arr: T[]) {
    this.collection = arr;
  }
  getAllElements(): T[] {
    return this.collection;
  }
  getDefinedElement(index: number): T {
    return this.collection[index];
  }
  clearCollection(): void {
    this.collection = [];
  }
  deleteDefinedElement(index: number): void {
    this.collection.splice(index, 1);
  }
  replaceDefinedElement(index: number, item: T): void {
    this.collection[index] = item;
  }
}

const numbers = new Collection<number>([1, 2, 3]);
console.log(numbers.getAllElements());
console.log(numbers.getDefinedElement(2));
numbers.clearCollection();
console.log(numbers.getAllElements());
const fruits = new Collection<string>(['banana', 'apple', 'lemon', 'kiwi', 'melon', 'watermelon']);
fruits.deleteDefinedElement(0);
console.log(fruits.getAllElements());
fruits.replaceDefinedElement(1, 'cherry');
console.log(fruits.getAllElements());
