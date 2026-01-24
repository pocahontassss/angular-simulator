export class Collection<T> {

  elements: T[];

  constructor(elements: T[]) {
    this.elements = elements;
  }

  getAllElements(): T[] {
    return this.elements;
  }

  getElement(index: number): T {
    return this.elements[index];
  }

  clearElements(): void {
    this.elements = [];
  }

  removeElement(index: number): void {
    this.elements.splice(index, 1);
  }

  replaceElement(index: number, elem: T): void {
    this.elements[index] = elem;
  }

}
