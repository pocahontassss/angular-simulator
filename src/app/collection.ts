const cars: string[] = ['priora', 'patriot', 'logan', 'fiat', 'corolla'];
const fuelGrades: number[] = [76, 86, 92, 95, 100];

class Collection<T> {
  arr: T[];

  constructor(arr: T[]) {
    this.arr = [...arr];
  }

  getAllCollection() {
    return this.arr;
  }

  getItemCollection(i: number) {
    return this.arr[i];
  }

  deleteAllCollection() {
    this.arr.length = 0;
    return this.arr;
  }

  deleteItemColection(i: number) {
    this.arr.splice(i, 1);
    return this.arr;
  }

  addItemCollection(item: T) {
    this.arr.push(item);
    return this.arr;
  }
}

let garage = new Collection<string>(cars);
console.log('Исходный гараж:', garage.getAllCollection());
console.log('Это машина [3]:', garage.getItemCollection(3));
console.log('После удаления машины [1]:', garage.deleteItemColection(1));
console.log('После полной очистки:', garage.deleteAllCollection());
console.log('После добавления машины [volga]:', garage.addItemCollection('volga'));

let gasStation = new Collection<number>(fuelGrades);
console.log('Все марки на станции:', gasStation.getAllCollection());
console.log('Это марка бензинна [2]:', gasStation.getItemCollection(2));
console.log('После удаления марки топлива [3]:', gasStation.deleteItemColection(3));
console.log('После полной очистки:', gasStation.deleteAllCollection());
console.log('После добавления марки [43]:', gasStation.addItemCollection(43));