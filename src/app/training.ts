function sum(a: number, b: number): number {
  return a + b;
}

let uploadStatus: 'loading' | 'success' | 'error'; 

uploadStatus = 'loading';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

textFormat = 'uppercase';

interface IUser {
  name: string;
  age: number;
  email: string;
  phone?: string;
}

interface IAdminUser extends IUser {
  role: string;
  accessLevel: number;
}

function formatText( text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }

  if (format === 'lowercase') {
    return text.toLowerCase();
  }

   if (format === 'capitalize') {
    return text[0].toUpperCase() + text.slice(1);
  }

  return text;
}

function removeSymbol(text: string, symbol: string): string {
  return text.replaceAll(symbol, '');
}

const users: IUser[] = [
  {
    name: 'Arystan',
    age: 26,
    email: 'arystan@gmail.com',
  },
  {
    name: 'Elena',
    age: 18,
    email: 'elena@gmail.com',
  },
  {
    name: 'Alex',
    age: 30,
    email: 'alex@gmail.com',
    phone: '+79991234567',
  },
];

const filteredUsers = users.filter((user) => {
  return user.age >= 25;
});