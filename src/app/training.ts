interface IUser {
  name: string;
  age: number;
  password?: string;
}

interface IDeveloper extends IUser {
  programmingLanguage: string;
}

let uploadStatus: 'loading' | 'success' | 'error';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

function getSumm(a: number, b: number): number {
  return a + b;
}

function getString(a: string, b: 'uppercase' | 'lowercase' | 'capitalize'): string {
  switch (b) {
    case 'uppercase':
      return a.toUpperCase();

    case 'lowercase':
      return a.toLowerCase();

    case 'capitalize':
      return a[0].toUpperCase() + a.slice(1);
  }
}

function delCharacter(a: string, b: string): string {
  return a.replaceAll(b, '');
}

let users: IUser[] = [
  {
    name: 'Ramzat',
    age: 20,
    password: '12345678',
  },
  {
    name: 'Amir',
    age: 25,
    password: '12345678910',
  },
  {
    name: 'Egor',
    age: 18,
    password: '55555555',
  },
];
const filteredUsers: IUser[] = users.filter((user) => user.age > 20);
