export class MultiSourceCollection<T> {
  private memoryItems: T[] = [];
  private currentSource: 'memory' | 'localStorage' = 'memory';

  setSource(source: 'memory' | 'localStorage'): void {
    this.currentSource = source;
  }

  getAll(): T[] {
    if (this.currentSource === 'memory') {
      return [...this.memoryItems];
    } else {
      const data = localStorage.getItem('my_key');
      return data ? (JSON.parse(data) as T[]) : [];
    }
  }

  add(item: T): void {
    if (this.currentSource === 'memory') {
      this.memoryItems.push(item);
    } else {
      const updatedList = this.getAll();
      updatedList.push(item);
      localStorage.setItem('my_key', JSON.stringify(updatedList));
    }
  }

  clear(): void {
    if (this.currentSource === 'memory') {
      this.memoryItems = [];
    } else {
      localStorage.removeItem('my_key')
    }

  }
}




