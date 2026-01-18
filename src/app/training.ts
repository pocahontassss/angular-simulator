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

const filteredUsers: IUser[] = users.filter((user: IUser) => user.city === 'Moscow');

// Функции
function sum(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

function formatText(text: string, textFormat: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (textFormat === 'uppercase') {
    return text.toUpperCase();
  } else if (textFormat === 'lowercase') {
    return text.toLowerCase();
  } else {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
}

function deleteSymbol(string: string, symbol: string): string {
  return string.replaceAll(symbol, '');
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