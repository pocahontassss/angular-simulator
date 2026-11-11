function sum(a: number, b: number): number {
  return a + b;
}
sum(22, 28);

let uploadStatus: 'loading' | 'success' | 'error';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

interface IUser {
  id?: number; 
  username?: string; 
  email?: string;
  name: string;
  age: number;
  city?: string;
}

let user1: IUser = { 
  name: 'Ahmed',
  age: 24,
  city: 'Sochi'
};

let user2: IUser = {
  name: 'furij',
  age: 19,
  city: 'Moscow'
};

interface IStudent extends IUser {
  faculty: string;
}

let student: IStudent = {
  name: 'Arsul',
  age: 32,
  city: 'Hasavyrt',
  faculty: 'IT'
};

function formatString(text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (!text) return '';
  
  if (format === 'uppercase') {
    return text.toUpperCase();
  }
  else if (format === 'lowercase') {
    return text.toLowerCase();
  }
  else {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

function removeChar(text: string, symbol: string): string {
  return text.replaceAll(symbol, "");
}

const users: IUser[] = [
  {
    name: 'Murad',
    age: 29,
    city: 'Hasavyrt'
  },
  {
    name: 'Ruslan',
    age: 18,
    city: 'Almaty'
  },
  {
    name: 'Murad',
    age: 23,
    city: 'Sochi'
  }
];

const filteredUsers: IUser[] = users.filter((user: IUser) => {
  return user.city === 'Baku';
});
console.log(filteredUsers);
