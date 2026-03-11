interface IUser {
  name: string;
  username: string;
  age: number;
  email: string;
  address?: string;
}

interface IGuest extends IUser {
  role?: string;
  active?: boolean;
}

let uploadStatus: 'loading' | 'success' | 'error';
let textFormat: 'uppercase' | 'lowercase' | 'capitalize';


function getSum(a: number, b: number): number {
  return a + b;
}

type TextFormat = "uppercase" | "lowercase" | "capitalize";

function getFormatString(text: string, style: TextFormat): string {
  switch (style) {
    case 'uppercase':
      return text.toUpperCase();
      break;
    case 'lowercase':
      return text.toLowerCase();
      break;
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      break;
  }
}

function removeChar(text: string, charToRemove: string): string {
  return text.replaceAll(charToRemove, '');
}

const users: IUser[] = [
  {
    name: 'Victor',
    username: 'Petrovich',
    age: 45,
    email: 'victor123@mail',
  },
  {
    name: 'Alexander',
    username: 'Alexandrovich',
    age: 51,
    email: 'sanya777@mail',
  },
  {
    name: 'Sara',
    username: 'Kona',
    age: 33,
    email: 'akora33@mail',
  },
]

const ageUser40: IUser[] = users.filter((user: IUser) => user.age > 40);



