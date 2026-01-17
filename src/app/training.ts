// Интерфейсы для пользователей
interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  avatarUrl?: string;
}
interface IAdminUser extends IUser {
  role: 'admin';
  permissions: string[];
  lastLoginAt?: Date;
}

// Типы для статусов и форматов текста
type Status = 'loading' | 'success' | 'error';
type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

// Переменные
let status: Status = 'loading';
let textFormat: TextFormat = 'uppercase';
const users: IUser[] = [
  {
    id: 1,
    name: 'Иван',
    email: 'ivan@mail.ru',
    age: 25,
    avatarUrl: 'ivan.png',
  },
  {
    id: 2,
    name: 'Анна',
    email: 'anna@mail.ru',
    age: 17,
  },
  {
    id: 3,
    name: 'Пётр',
    email: 'petr@mail.ru',
    age: 30,
    avatarUrl: 'petr.png',
  },
];

// Функция возвращающая сумму двух чисел
export function sum(a: number, b: number): number {
  return a + b;
}
// Функция форматирующая текст в зависимости от переданного формата
export function formatText(text: string, format: TextFormat): string {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();

    case 'lowercase':
      return text.toLowerCase();

    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    default:
      return text;
  }
}
export function removeChar(text: string, char: string): string {
  return text.split(char).join('');
}