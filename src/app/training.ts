interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number;
}

interface IAdmin extends IUser {
  role: 'admin' | 'superadmin' | 'superduperadmin';
  permissions: string[];
}

type UploadStatus = 'loading' | 'success' | 'error';

type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

const uploadStatus: UploadStatus = 'loading';
const textFormat: TextFormat = 'capitalize';

function sum(a: number, b: number): number {
  return a + b;
}

function formatString(text: string, format: TextFormat): string {
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

function removeChar(text: string, char: string): string {
  return text.replaceAll(char, '');
}

const users: IUser[] = [
  { id: 1, name: 'Анна', email: 'anna@mail.ru', age: 25 },
  { id: 2, name: 'Борис', email: 'boris@mail.ru' },
  { id: 3, name: 'Виктор', email: 'victor@mail.ru', age: 30 },
  { id: 4, name: 'Загир', email: 'zagir@mail.ru', age: 19 },
];

const adults = users.filter((user) => (user.age ?? 0) > 25);