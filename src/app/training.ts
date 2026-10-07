interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  city?: string; 
}

interface IAdmin extends IUser {
  role: string;
  permissions: string[];
  isActive: boolean;
}

type UploadStatus = 'loading' | 'success' | 'error';

const uploadStatus: UploadStatus = 'loading';

type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

function sum(a: number, b: number): number {
  return a + b;
}

console.log('Сумма:', sum(5, 10));

function formatText(text: string, format: TextFormat): string {
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

console.log(formatText('привет мир', 'uppercase'));
console.log(formatText('ПРИВЕТ МИР', 'lowercase'));
console.log(formatText('привет мир', 'capitalize'));

function removeChar(text: string, char: string): string {
  return text.split(char).join('');
}

console.log(removeChar('привет мир', 'и'));

const users: IUser[] = [
  { id: 1, name: 'Алибек', email: 'alibek@mail.com', age: 39, city: 'Хасавюрт' },
  { id: 2, name: 'Мухаммад', email: 'muhammad@mail.com', age: 25, city: 'Медина' },
  { id: 3, name: 'Ахмад', email: 'ahmad@mail.com', age: 31 },
  { id: 4, name: 'Ислам', email: 'islam@mail.com', age: 28, city: 'Хасавюрт' },
  { id: 5, name: 'Юсуф', email: 'yusuf@mail.com', age: 35, city: 'Дербент' },
];

const usersOver30: IUser[] = users.filter((user: IUser) => user.age > 30);
console.log('Пользователи старше 30:', usersOver30);

const usersFromKhasavyurt: IUser[] = users.filter((user: IUser) => user.city === 'Хасавюрт');
console.log('Из Хасавюрта:', usersFromKhasavyurt);