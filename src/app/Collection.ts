export class Collection<T> {
    private items: T[] = [];
    constructor(initialItems: T[] = []) {
    this.items = [...initialItems];
    }

    getAll(): T[] {
        return this.items
    }

    getItem(index: number): T | undefined {
        return this.items[index]
    }
    
    clear():void {
        this.items = []
    }

    removeItem(index: number): void {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1)
        }
    }

    replaceItem(index: number, newItem: T): void {
        if (index >=0 && index < this.items.length)
            this.items[index] = newItem
    }

}