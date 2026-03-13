function sum(a: number, b: number): number {
  return a + b;
}

type UploadStatus = "loading"| "success" | "error";
let uploadStatus: UploadStatus;

type TextFormat = 'uppercase'| 'lowercase'| 'capitalize';
let textFormat: TextFormat;

interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  phone?: string;
}

interface IChild extends IUser {
  schoolAdress?: string;
}

function getFormatText(text: string, format: TextFormat): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  } else if (format === 'lowercase') {
    return text.toLowerCase();
  } else {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
}

function deleteSymbol(string: string, symbol: string): string {
  return string.replaceAll(symbol, '');
}

const users: IUser[] = [
  {
    id: 1,
    name: 'Алексей',
    email: 'aleksey@example.com',
    age: 13,
    phone: '+79991234567'
  },
  {
    id: 2,
    name: 'Мария',
    email: 'maria@example.com',
    age: 17
  },
  {
    id: 3,
    name: 'Иван',
    email: 'ivan@example.com',
    age: 25,
    phone: '+79997654321'
  }
]

const filterUsers: IUser[] = users.filter((user: IUser): boolean => user.age > 23);
