# Отчёт по этапам 3–5

## Что добавлено

- При создании `AppComponent` записываются дата и время последнего запуска страницы.
- При каждом запуске увеличивается сохранённый счётчик посещений.
- Создан generic-класс `Collection<T>` с чтением, очисткой, удалением и заменой элементов.
- В `AppComponent` созданы две коллекции на разных источниках: числах и цветах.

## 3. Дата последнего запуска

В `AppComponent` конструктор вызывает метод:

```ts
constructor() {
  this.saveLastVisitDate();
  this.saveVisitCount();
}

private saveLastVisitDate(): void {
  localStorage.setItem('lastVisitDate', new Date().toISOString());
}
```

Angular создаёт корневой `AppComponent` при запуске приложения, поэтому конструктор выполняется при загрузке страницы. `new Date()` получает текущий момент времени, а `toISOString()` переводит его в стандартную строку даты и времени. `localStorage.setItem` сохраняет строку в браузере под ключом `lastVisitDate`.

Данные в `localStorage` остаются между перезагрузками страницы. Получить сохранённое значение можно так:

```ts
localStorage.getItem('lastVisitDate');
```

## 4. Счётчик посещений

```ts
private saveVisitCount(): void {
  const savedCount = Number(localStorage.getItem('visitCount') ?? '0');
  localStorage.setItem('visitCount', String(savedCount + 1));
}
```

`localStorage` хранит строки, поэтому `Number(...)` преобразует предыдущий счётчик в число. Если ключа ещё нет, оператор `??` подставляет `'0'`. Затем счётчик увеличивается на единицу и сохраняется обратно через `String(...)`.

Так как оба метода вызываются из конструктора, дата обновляется, а число увеличивается при каждой загрузке приложения.

## 5. Generic-класс `Collection<T>`

Файл: `src/collection.ts`.

`T` — параметр типа. Когда создаём `Collection<number>`, внутри будет массив чисел; для `Collection<Color>` — массив значений enum `Color`. Сам класс при этом не привязан к конкретному типу данных.

Конструктор принимает начальный массив `source` и копирует его:

```ts
constructor(source: T[]) {
  this.items = [...source];
}
```

Копия массива отделяет внутреннее состояние коллекции от исходного массива. `private items` означает, что менять этот массив напрямую снаружи нельзя; доступ к нему идёт через методы класса.

### Методы коллекции

- `getAll(): T[]` возвращает копию всех элементов. Изменение возвращённого массива не меняет внутренний массив коллекции.
- `get(index): T | undefined` возвращает элемент по индексу. Если индекс некорректный или элемент отсутствует, возвращает `undefined`.
- `clear(): void` заменяет внутренний массив пустым.
- `remove(index): boolean` удаляет элемент по индексу. Возвращает `true`, если удаление выполнено, иначе `false`.
- `replace(index, item): boolean` заменяет элемент по индексу. Возвращает `true`, если замена выполнена, иначе `false`.

Индексы массивов начинаются с нуля: индекс `0` — первый элемент. Методы `get`, `remove` и `replace` проверяют, что индекс целый и находится внутри массива.

## Два источника данных

В `AppComponent` созданы две независимые коллекции:

```ts
numberCollection = new Collection<number>([10, 20, 30]);
colorCollection = new Collection<Color>([Color.Red, Color.Green, Color.Blue]);
```

Первая получает массив чисел, вторая — массив цветов из enum `Color`. TypeScript выводит тип элементов из `T`, поэтому, например, в `colorCollection.replace(...)` можно передать только значение типа `Color`.

Примеры вызова:

```ts
this.numberCollection.getAll();
this.colorCollection.get(0); // Color.Red
this.numberCollection.replace(1, 25);
this.colorCollection.remove(2);
this.numberCollection.clear();
```

Коллекции добавлены в компонент для демонстрации двух источников и типов. Они пока не выводятся в HTML.
