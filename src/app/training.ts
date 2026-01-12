// Задание №1: Создать функцию,
// которая принимает 2 числа и возвращает их сумму.
// Полностью типизировать параметры, значение, возвращаемое функцией.

function sumNumbers(a: number, b: number): number {
  return a + b;
}

console.log(sumNumbers(15, 20));

// Задание №2: Создать переменную status, которая может быть только: "loading", "success", "error".

export const status: 'loading' | 'success' | 'error' = 'error';

// Задание №3 : Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".

type textFormat = 'uppercase' | 'lowercase' | 'capitalize';

// Задание №4: Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.

interface IUser {
  name: string;
  age: number;
  height: number;
  gender: string;
  maritalStatus?: string;
}

// Задание №5: Создать интерфейс, который расширяется интерфейсом User с задания №4 и имеет свои дополнительные поля.

interface IUserAppearance extends IUser {
  weight: number;
  hairColor: string;
  eyesColor: string;
  footSize: number;
}

// Задание №6: Создать функцию, которая принимает строку и вариант,
// как именно форматировать строку (задание №3) и на основе этого возвращает форматированную строку.

function formatText(string: string, format: textFormat): string {
  if (format === 'uppercase') {
    return string.toUpperCase();
  } else if (format === 'lowercase') {
    return string.toLowerCase();
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}

console.log(formatText('АМИР', 'uppercase'));
console.log(formatText('тойота', 'lowercase'));
console.log(formatText('Mark 2 jzx100', 'capitalize'));

// Задание №7: Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.

function replaceSymbol(string: string, symbol: string): string {
  return string.replaceAll(symbol, '');
}

console.log(replaceSymbol('Hellow world', '!'));

// Задание №8: Создать массив объектов на основе интерфейса с задания №4. Отфильтровать его по одному из параметров.

const users: IUser[] = [
  {
    name: 'Amir',
    age: 23,
    height: 168,
    gender: 'man'
  },
  {
    name: 'Leo',
    age: 30,
    height: 180,
    gender: 'man'
  },
  {
    name: 'Michelle',
    age: 30,
    height: 165,
    gender: 'woman'
  },
  {
    name: 'Karl',
    age: 44,
    height: 175,
    gender: 'man'
  }
];

let usersGender = users.filter(user => user.gender === 'man');
console.log(usersGender);