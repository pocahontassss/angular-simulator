interface IUser {
  name: string;
  username: string;
  age: number;
  email: string | number;
  address?: string;
}

interface Guest extends IUser {
  role?: string;
  active?: string;
}

let uploadStatus: 'loading' | 'succes' | 'error';
let textFormat: 'uppercase' | 'lowercase' | 'error';


function getSum(a: number, b: number): number {
  return a + b;
}

type TextFormat = "uppercase" | "lowercase" | "error";

function getFormatString(text: string, style: TextFormat): string {
  switch (style) {
    case 'uppercase':
      return text.toUpperCase();
      case 'lowercase':
        return text.toLowerCase();
        case 'error':
          return `Ошибка: невозможно отформатировать "${text}"`;
          default:
            return text;
  }
}

function removeChar(text: string, charToRemove: string): string {
  return text.replaceAll(charToRemove, '');
}

console.log(removeChar("Angular", "r"));
console.log(removeChar("Project", "j"));
console.log(removeChar("Project", "ject"));

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

const ageUser40 = users.filter(user => user.age > 40);
console.log(ageUser40);


