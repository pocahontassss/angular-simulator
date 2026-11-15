// Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.
interface IUser {
  id: number;
  name: string;
  age: number;
  isAdmin?: boolean;
  password: string;
}

//. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля
interface IMan extends IUser {
  beardColor: string;
  beardLength: number;
}

// Создать переменную status, которая может быть только: "loading", "success", "error".
let someStatus: 'loading' | 'success' | 'error' = 'loading';

// Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".
let textFormat: 'uppercase' | 'lowercase' | 'capitalize' = 'uppercase';

//  Создать функцию, которая принимает 2 числа и возвращает их сумму. Полностью типизировать параметры, значение, возвращаемое функцией.
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(6, 888888));

// Создать функцию, которая принимает строку и вариант,  как именно форматировать строку (задание №5) и на основе этого возвращает форматированную строку.
function formatString(str: string, variant: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (variant === 'uppercase') return str.toUpperCase();
  if (variant === 'lowercase') return str.toLowerCase();
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(formatString('something', 'capitalize'));
console.log(formatString('something', 'uppercase'));
console.log(formatString('SOMething', 'lowercase'));

// Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.  (есть специальные методы для этого, гуглим)
function removeSymbol(str: string, symbol: string): string {
  return str.replaceAll(symbol, '');
}
console.log(removeSymbol('javascript', 'a'));

// Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров
const usersArray: IUser[] = [
  {
    id: 1,
    name: 'Nuriddin',
    age: 27,
    isAdmin: false,
    password: 'adsfafdasdf',
  },
  {
    id: 2,
    name: 'Vlad',
    age: 22,
    isAdmin: true,
    password: 'etyeryteryey',
  },
  {
    id: 3,
    name: 'Muslim',
    age: 12,
    isAdmin: false,
    password: 'm,./m.khljkl',
  },
  {
    id: 4,
    name: 'Hasan',
    age: 14,
    isAdmin: false,
    password: 'zxvzxvcsde',
  },
  {
    id: 5,
    name: 'Husan',
    age: 14,
    isAdmin: false,
    password: 'zxvzxvcsde',
  },
];
console.log(usersArray);

const adultUsersArray: IUser[] = usersArray.filter(({ age }) => age >= 18);
console.log(adultUsersArray);

const usersWithoutAdmin: IUser[] = usersArray.filter(({isAdmin}) => !isAdmin)
console.log(usersWithoutAdmin)
