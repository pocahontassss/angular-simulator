function sumNum(a: number, b: number): number {
  return (a + b);
}

console.log(sumNum(50, 20));

let uploadStatus: "loading" | "success" | "error";

let textFormat: 'uppercase' | 'lowercase' |'capitalize';

interface IUser {
  surname: string;
  name: string;
  age: number;
  height?: number;
}

interface IEmployee extends IUser {
  patronymic: string;
}

function transformText (text: string, format: 'uppercase' | 'lowercase' |'capitalize'): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }
  if (format === 'lowercase') {
    return text.toLowerCase();
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function removeCharacter(text: string, symbol: string): string {
  return (text.replaceAll(symbol, ''));
}

const users: IUser[] = [
  {
    surname: "Gutov",
    name: "Amir",
    age: 19
  },
  {
    surname: "Магомедов",
    name: "Хасбулла",
    age: 24
  },
  {
    surname: "Нурмагомедов",
    name: "Хабиб",
    age: 35
  }
];

const availableUsers = users.filter(user => (user.age >= 24));

console.log(transformText("text form add", "uppercase"))

console.log(removeCharacter("text form add", "t"))

console.log(availableUsers)