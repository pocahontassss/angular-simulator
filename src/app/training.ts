import { IUser } from '../models/User.model';

type UploadStatus = 'loading' | 'success' | 'error';
type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

const uploadStatus: UploadStatus = 'loading';
const textFormat: TextFormat = 'capitalize';

const users: IUser[] = [
  {
    id: 1,
    name: 'Иван Петров',
    phone: 79161234567,
    address: 'ул. Ленина, д. 10, кв. 5',
    email: 'ivan@example.com',
  },
  {
    id: 2,
    name: 'Мария Сидорова',
    phone: 79169876543,
    address: 'пр. Мира, д. 25, кв. 12',
    email: 'maria@example.com',
  },
  {
    id: 3,
    name: 'Алексей Иванов',
    phone: 79165554433,
    address: 'ул. Пушкина, д. 7',
    email: 'alex@example.com',
  },
];

function calculateSum(a: number, b: number): number {
  return a + b;
}

calculateSum(2, 4);

function formatCapitalize(text: string) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (i === 0 || text[i - 1] === ' ' || text[i - 1] === ',') {
      result += text[i].toUpperCase();
    } else {
      result += text[i].toLowerCase();
    }
  }

  return result;
}

function formatText(text: string, format: TextFormat) {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return formatCapitalize(text);
    default:
      return text;
  }
}

console.log(formatText('hElLo wORLd', textFormat));

function removeChar(text: string, symbol: string) {
  return text.split(symbol).join('');
}

console.log(removeChar('Привет мир', 'R'));

function filterUsers(users: IUser[], par: string | number) {
  return users.filter((user) =>
    user.name === par ? user : console.log('Юзер с таким параметром не найден'),
  );
}

FiltrUsers(users, 'Иван');
