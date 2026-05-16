export {}

// Задание №4
let status: "loading" | "success" | "error";

// Задание №5  
let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

// Задание №6
interface IUser {
  name: string,
  age: number,
  isDeveloper: boolean,
  city?: string
}

// Задание №7
interface IDeveloper extends IUser{
  devExperience: number,
  fieldDevelopment: string
}

// Задание №3
function sum(a: number, b: number): number {
  return a + b;
}

// Задание №8

type FormatType = 'uppercase' | 'lowercase' | 'capitalize';

function formatString(str: string, format: FormatType): string {
  if (format === 'uppercase') return str.toUpperCase();
  else if (format === 'lowercase') return str.toLowerCase();
  else if (format === 'capitalize') return str[0].toUpperCase + str.slice(1).toLowerCase();
  
  return str;
}

// Задание №9

function removeCharacter(str: string, charToRemove: string): string {
  return str.replaceAll(charToRemove, '');
}

// Задание 10

const users: IUser[] = [
  {
    name: 'Isa',
    age: 18,
    isDeveloper: false
  },
  {
    name: 'Ismail',
    age: 23,
    isDeveloper: false
  },
  {
    name: 'Vladislav',
    age: 20,
    isDeveloper: true
  }
];

const developers = users.filter(user => user.isDeveloper === true);
console.log(developers)