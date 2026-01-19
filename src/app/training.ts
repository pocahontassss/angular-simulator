// 6. Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.
interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  email?: string;
}

// 7. Создать интерфейс для админа, который расширяется интерфейсом User с задания №5 и имеет свои дополнительные поля, присущие администратору
interface IAdmin extends IUser {
  isAdmin: true;
  permissions: string[];
}

// 4. Создать переменную status, которая может быть только: "loading", "success", "error".

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

// 5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".

enum TextFormat {
  UPPERCASE = 'uppercase',
  LOWERCASE = 'lowercase',
  CAPITALIZE = 'capitalize'
}

// 3. Создать функцию, которая принимает 2 числа и возвращает их сумму. Полностью типизировать параметры, значение, возвращаемое функцией.

function sum(a: number, b: number): number {
  return a + b;
}

// 8. Создать функцию, которая принимает строку и вариант,  как именно форматировать строку (задание №5) и на основе этого возвращает форматированную строку.


function formatText(str: string, format: TextFormat): string {
  if (format === TextFormat.UPPERCASE) {
    return str.toUpperCase();
  } else if (format === TextFormat.LOWERCASE) {
    return str.toLowerCase();
  } else {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
}

// 9. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.

const deleteSymbol = (str: string, symbol: string): string => str.replaceAll(symbol, '');

console.log(deleteSymbol('hello', 'h'));

// 10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров

const users: IUser[] = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    age: 69,
    email: 'john69doe@test.com',
  },
  {
    id: 2,
    name: 'Anna',
    surname: 'Doe',
    age: 96,
    email: 'anna96doe@test.com',
  },
  {
    id: 3,
    name: 'Jim',
    surname: 'Joel',
    age: 59,
  },
];

const usersFiltered = users.filter((user) => user.age >= 69);
console.log(usersFiltered);
