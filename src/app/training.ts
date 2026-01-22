interface IUser {
  name: string;
  age: number;
  email?: string;
}

interface IAdmin extends IUser {
  role: string;
  experience: number;
}

const admin: IAdmin = {
  name: 'Galim',
  age: 27,
  role: 'Admin',
  experience: 1,
};

let status1: 'loading' | 'success' | 'error' = 'success';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize' = 'uppercase';

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(5, 7));

function formatText(text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  switch(format) {
    case 'uppercase':
      return text.toUpperCase();

    case 'lowercase':
      return text.toLowerCase();

    case 'capitalize':
      return text[0].toUpperCase() + text.slice(1);

    default:
      return text;
  }
}

console.log(formatText('Angular', 'uppercase'));

function removeSymbol(text: string, symbol: string): string {
  return text.replaceAll(symbol, '');
}

console.log(removeSymbol('Angular!', '!'));

const users: IUser[] = [
  { name: 'Галим', age: 27, email: 'Galim@mail.com' },
  { name: 'Амиры', age: 35 },
  { name: 'Али', age: 21, email: 'Ali@mail.com' },
];

const adults: IUser[] = users.filter((user: IUser) => user.age > 21);

console.log(adults);
