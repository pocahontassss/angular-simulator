// Переменные
let status1: 'loading' | 'success' | 'error';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

let users: IUser[] = [
  {
    name: 'Alex',
    surname: 'Novikov',
    city: 'Moscow',
    age: 25
  },
  {
    name: 'Roman',
    surname: 'Shaymardanov',
    city: 'Chelyabinsk',
    age: 19
  },
  {
    name: 'Nikita',
    surname: 'Ivanov',
    city: 'Moscow',
    age: 23
  },
  {
    name: 'Alice',
    surname: 'Brown',
    city: 'London',
    age: 45
  }
];

let filteredUsers = users.filter(user => user.city === 'Moscow');

// Функции
function sum(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber
}

function getFormattedString(string: string, textFormat: string): string {
  if (textFormat === 'uppercase') {
    return string.toUpperCase();
  } else if (textFormat === 'lowercase') {
    return string.toLowerCase();
  } else {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
}

function getModifiedString(string: string, symbol: string): string {
  return string.replace(symbol, '');
}

// Интерфейсы

interface IUser {
  name: string,
  surname: string,
  age: number,
  city: string,
  email?: string
}

interface IAdmin extends IUser {
  post: string,
  isFullAccess: boolean
}