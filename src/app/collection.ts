export class Collection<T> {

  private items: T[];

  constructor(initialItems: T[] = []) {
    this.items = [...initialItems];
  }

  getAll(): T[] {
    return this.items;
  }

  getByIndex(index: number): T | undefined {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

  removeByIndex(index: number): void {
    this.items.splice(index, 1);
  }

  replaceByIndex(index: number, newItem: T): void {
    this.items[index] = newItem;
  }

  add(item: T): void {
    this.items.push(item);
  }
}

const consoles: string[] = ['Nintendo Switch', 'Sega Genesis', 'SNES', 'Playstation', 'Xbox', 'Nintendo GameCube'];
const collectionConsoles: Collection<string> = new Collection(consoles);
collectionConsoles.replaceByIndex(2, 'Nintendo Wii U');
collectionConsoles.getByIndex(4);
collectionConsoles.removeByIndex(1);

const games: string[] = ['CS 2', 'DOTA 2', 'GTA 6', 'Resident Evil', 'Aliens'];
const collectionGame: Collection<string>  = new Collection(games);
collectionGame.getAll();
collectionGame.replaceByIndex(3, 'Watch Dogs 2');
