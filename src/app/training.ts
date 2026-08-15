function calcTotal(a: number, b: number): number {
  return (a + b)
};

let uploadStatus: 'loading' | 'success' | 'error' = 'loading';
let textFormat: 'uppercase' | 'lowercase' | 'capitalize' = 'lowercase';

interface IUser {
  name: string;
  age: number;
  country?: string;
};

interface IVlad extends IUser {
  gender: string;
};

function formatText(str: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (format === 'uppercase') {
    return str.toUpperCase();
  }
  if (format === 'lowercase') {
    return str.toLowerCase();
  }
  if (format === 'capitalize') {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
};

function removeChar(str: string, char: string): string {
  return str.replaceAll(char, '')
};

const users: IUser[] = [
  {name: 'ivan', age: 25, country: 'Russia'},
  {name: 'Anna', age: 17, country: 'Russia'},
  {name: 'Petr', age: 32, },
  {name: 'Dmitry', age: 18, country: 'Russia'},
];

const adults = users.filter(user => user.age >=18);