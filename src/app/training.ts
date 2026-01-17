// подключить его в апп компонент.тс

// 3. Создать функцию, которая принимает 2 числа и возвращает их сумму. 
// Полностью типизировать параметры, значение, возвращаемое функцией.

function calculate(a: number, b: number): number {
  return a + b;
}

console.log(calculate(5, 7));

// 4. Создать переменную status, которая может быть только: "loading", "success", "error".

let statu: "loading" | "success" | "error";
statu = "loading";

// 5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';
textFormat = 'lowercase';

// 6. Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.

interface IUser {
  name: string;
  gender: 'man' | 'woman';
  age: number;
  married?: boolean
}

// 7. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля

interface IChild extends IUser {
  schoolAdress: string;
}

// 8. Создать функцию, которая принимает строку и вариант, 
// как именно форматировать строку (задание №5) и на основе этого возвращает форматированную строку.

function nickname(text: string, format: typeof textFormat): string {
  if (format === 'uppercase') return text.toUpperCase();
  if (format === 'lowercase') return text.toLowerCase();
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

console.log(nickname('name', 'uppercase'));

// 9. Создать функцию, которая принимает строку и символ,
// возвращает строку без переданного символа. (есть специальные методы для этого, гуглим)

function deleteSymbol(string: string, symbol: string): string {
  return string.replaceAll(symbol, '');
}

console.log(deleteSymbol('sos', '!!!'))

// 10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров

const users: IUser[] = [
  {
    name: 'Ben',
    gender: 'man',
    age: 33
  },
  {
    name: 'Josh',
    gender: 'man',
    age: 25
  },
  {
    name: 'Mike',
    gender: 'man',
    age: 70
  }
];

let oldUser = users.filter(user => user.age >= 50);
console.log(oldUser)