interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number; 
}

interface IEmployee extends IUser {
  position: string;
  salary: number;
}

type uploadStatus = "loading" | "success" | "error";
let uploadStatus = "loading";

type stringFormat = "uppercase" | "lowercase" | "capitalize";
let stringFormat = "capitalize";

function sum(a: number, b: number): number {
  return a + b;
}

function textFormat(text: string, format: stringFormat): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }
  if (format === 'lowercase') {
    return text.toLowerCase();
  }
  if (format === 'capitalize') {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return text;
}

function removeLetter(text: string, letterToRemove: string) {
  return text.split(letterToRemove).join('');
}

const usersList: IEmployee[] = [
  {
    id: 1,
    name: 'Ainur',
    email: 'yt.frost@mail.ru',
    age: 25,
    position: 'Frontend Developer',
    salary: 100000
  },
  {
    id: 2,
    name: 'Ilnur',
    email: 'ilnur2034@mail.ru',
    position: 'Backend Developer',
    salary: 120000
  },
  {
    id: 3,
    name: 'Farukh',
    email: 'farukh2034@mail.ru',
    age: 26,
    position: 'Fullstack Developer',
    salary: 200000
  },
];

const filteredUsersBySalary: IEmployee[] = usersList.filter((user: IEmployee) => user.salary < 150000);