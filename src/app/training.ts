let status: 'loading' | 'success' | 'error';
let textFormat: 'uppercase' | 'lowercase' | 'capitalize';
let user: IUser[] = [
  {
    name: 'Ilnur',
    age: 35,
    height: 183,
  },
  {
    name: 'Vlad',
    age: 25,
    height: 174,
  },
  {
    name: 'Elnur',
    age: 31,
    height: 171,
  },
  {
    name: 'Nizam',
    age: 26,
    height: 175,
  },
  {
    name: 'Фарух',
    age: 36,
    height: 170,
  },
];

interface IUser {
  name: string;
  age: number;
  height?: number;
}

interface IPlayer extends IUser {
  passportId: number;
  roles: string;
  phone?: number;
}

export function sumNum(first: number, second: number) {
  const sum = first + second;
  return sum;
}

sumNum(5, 3);

function formatText(word: string, textFormat: string) {
  if (textFormat === 'uppercase') {
    return word.toUpperCase();
  }
  if (textFormat === 'lowercase') {
    return word.toLowerCase();
  }

  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

formatText('Hello', 'lowercase');

function removeSymbol(word: string, symbol: string) {
  return word.split(symbol).join('');
}

removeSymbol('names', 's');

const person = user.filter((el) => el.age > 26);
console.log(person);
