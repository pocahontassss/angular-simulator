import { retry } from "rxjs";

function sum(num1:number, num2:number):number {
  return num1+num2;
}

let status: "loading" | "success" | "error";

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

interface IUser {
  name: string;
  age: number;
  isAdmin?: boolean;
}

interface IPerson extends IUser {
  name: string;
  email: string;
  job: string;
  "job position"?: string;
  country: string;
}


function formatString(str: string, format: string): string {
  if(!str) return str;
  return format === "uppercase" ? str.toUpperCase(): format === "lowercase" ? str.toLowerCase() : str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

function removeChar(str: string, ch: string) : string {
  return str.replaceAll(ch, "");
}

const users: IUser[] = [
  {
    name: "Ilyas",
    age: 24
  },
  {
    name: "Ilnur",
    age: 21
  },
  {
    name: "Ilnar",
    age: 20
  },
  {
    name: "Ildus",
    age: 40
  }
]

const usersFiltered: IUser[] = users.filter(el=> el.age < 30);

