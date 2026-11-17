# Этап 2: перечисление цветов и проверка RGB

## Что изменено

- Создан `src/enums/Color.ts` с перечислением цветов.
- В `AppComponent` добавлен метод `isPrimaryColor`.
- Метод считает основными цветами RGB: красный, зелёный и синий.

## `Color` — общий тип для цветов

В `src/enums/Color.ts` объявлен и экспортирован enum:

```ts
export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
  Yellow = 'yellow',
  Orange = 'orange',
  Purple = 'purple',
  Black = 'black',
  White = 'white',
}
```

Enum задаёт фиксированный набор именованных значений. Вместо того чтобы передавать по коду произвольные строки вроде `'red'` или `'purple'`, можно использовать `Color.Red` и `Color.Purple`. Так TypeScript проверяет, что в метод передают значение из этого набора.

Значения здесь строковые, поэтому в JavaScript `Color.Red` соответствует строке `'red'`. `export` делает enum доступным для импорта в других файлах.

## `isPrimaryColor` — проверка значения

В `src/app/app.component.ts` добавлен импорт:

```ts
import { Color } from '../enums/Color';
```

Путь начинается от папки `src/app`: `..` поднимается в `src`, затем код заходит в `enums/Color`.

Сам метод:

```ts
isPrimaryColor(color: Color): boolean {
  return color === Color.Red || color === Color.Green || color === Color.Blue;
}
```

- `color: Color` — тип параметра. Вызов должен передать один из членов enum.
- `: boolean` — тип результата: метод всегда возвращает `true` или `false`.
- `===` сравнивает переданный цвет с одним конкретным значением.
- `||` — логическое «или». Достаточно совпадения хотя бы с одним RGB-цветом.

Примеры:

```ts
isPrimaryColor(Color.Red);    // true
isPrimaryColor(Color.Green);  // true
isPrimaryColor(Color.Blue);   // true
isPrimaryColor(Color.Purple); // false
```

Например, для `Color.Purple` все три сравнения будут `false`; выражение с `||` тоже даст `false`.

## Где вызывается метод

Метод находится в `AppComponent`, но пока нигде не вызывается. Это соответствует текущему заданию: добавить типы и проверку. Чтобы проверить значение в другом методе компонента, можно написать `this.isPrimaryColor(Color.Red)`. Чтобы вывести результат в Angular-шаблоне, метод можно вызвать через привязку, например `{{ isPrimaryColor(Color.Red) }}`, предварительно открыв `Color` для шаблона или передав значение через свойство компонента.
