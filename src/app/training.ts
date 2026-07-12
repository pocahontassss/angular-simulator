export class Traning {
  id: number = 1;
  title: string = 'Моя тренировка';

  constructor() {
    console.log('Файл training.ts успешно подключен и работает!');
  }
}

// функция
function sum(a: number, b: number):
number {
  return a + b;
}

// переменная с 3мя возможными значениями
type Status = "loading" | "success" | "error";
let status: Status = "loading";

// переменная
type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';
let textFormat: TextFormat = 'uppercase';

//интерфейс IUser
interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
}

//интерфейс расщиряющий IUser
interface IAdminUser extends IUser {
  role: string;
  permissions: string[];
}

// функция форматирования строки
function formatText(text: string, format: TextFormat): string {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();
    case "lowercase":
      return text.toLowerCase ();
    case "capitalize":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
}

//удаление символа из строки
function removeChar(text: string, char: string): string {
  return text.replaceAll(char, '');
}

//массив объекта IUser и фильтрация
const users: IUser[] = [
  { id: 1, name: "Anne", email: "anna@test.com", phone: "12"},
  { id: 2, name: "Max", email: "max@test.com", phone: "123"},
];

const filtred = users.filter(user => user.id > 1);
const withPhone = users.filter(users => users.phone !== undefined);