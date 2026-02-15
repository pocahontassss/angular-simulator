interface IUser {
  name: string;
  age: number;
  country: string;
  city?: string;
}

interface IWorker extends IUser {
  profession: string;
  experience: number;
}

let appstatus: 'loading' | 'success' | 'error';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize'

function getSum(a: number, b: number): number {
  return a + b;
}

const total: number = getSum(9, 8);

function getFormattedText(text: string, format: TextFormat): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  } else if (format === 'lowercase') {
    return text.toLowerCase();
  } else if (format === 'capitalize') {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  return text;
}

function getTextWithoutChar(text: string, char: string): string {
  return text.replaceAll(char, '');
}

const students: IUser[] = [
  {
    name: 'Dauren',
    age: 30,
    country: 'Kazakhstan',
    city: 'Uralsk',
  },
  {
    name: 'Alex',
    age: 30,
    country: 'Russia',
  },
  {
    name: 'Aigerim',
    age: 25,
    country: 'Kazakhstan',
    city: 'Astana',
  },
  {
    name: 'John',
    age: 28,
    country: 'USA',
    city: 'New York',
  },
]

const studentsFromKZ: IUser[] = students.filter((user: IUser) => user.country === 'Kazakhstan');
