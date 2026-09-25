interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number;
}

interface IAdmin extends IUser {
  role: string;
  permissions: string[];
}

type UploadStatus = 'loading' | 'success' | 'error';

type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

const uploadStatus: UploadStatus = 'loading';

const textFormat: TextFormat = 'uppercase';

function sum(a: number, b: number): number {
  return a + b;
}

function formatText(str: string, format: TextFormat): string {
  switch (format) {
    case 'uppercase':
      return str.toUpperCase();
    case 'lowercase':
      return str.toLowerCase();
    case 'capitalize':
      if (!str) return str;
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    default:
      return str;
  }
}

function removeCharacter(str: string, char: string): string {
  return str.replaceAll(char, '');
}

const users: IUser[] = [
  {
    id: 1,
    name: 'Ivan',
    email: 'ivan@example.com',
    age: 25
  },
  {
    id: 2,
    name: 'Alexey',
    email: 'alex@example.com',
    age: 30
  },
  {
    id: 3,
    name: 'Maria',
    email: 'maria@example.com',
    age: 22
  }
];

function filterUsersByAge(users: IUser[], minAge: number): IUser[] {
  return users.filter(
    (user: IUser) => user.age !== undefined && user.age >= minAge
  );
}

export {};