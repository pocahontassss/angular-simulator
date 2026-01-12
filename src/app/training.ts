interface IUser {
  id: number;
  name: string;
  surname: string;
  age?: number;
}

interface IEmployee extends IUser {
  position: string;
  status: Status;
}

type Status = 'loading' | 'success' | 'error';
type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

const sum = (a: number, b: number): number => {
  return a + b;
}

sum(2, 4);

const formatText = (text: string, format: TextFormat): string => {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
}

formatText('angular simulator', 'capitalize');
formatText('angular simulator', 'uppercase');
formatText('Angular Simulator', 'lowercase');

const removeSymbol = (str: string, symbol: string): string => {
  return str.replace(symbol, "");
};

console.log(removeSymbol('Text', 'e'))

const users: IEmployee[] = [
  {
    id: 1,
    name: 'Jon',
    surname: 'Whitmore',
    position: 'Frontend',
    status: 'success'
  },
  {
    id: 2,
    name: 'Ethan',
    surname: 'Bennett',
    position: 'Backend',
    status: 'error'
  },
  {
    id: 3,
    name: 'Lucas',
    surname: 'Carter',
    position: 'Frontend',
    status: 'loading'
  }
]

const filterUsersStatus: IEmployee[] = users.filter(user => user.status === 'success')