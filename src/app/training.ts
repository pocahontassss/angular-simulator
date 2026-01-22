//Интерфейсы.
interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number;
}

interface IDeveloper extends IUser {
  github: string;
  skills: string[];
}

//Переменные.
type Status = 'loading' | 'success' | 'error';
type textFormat = 'uppercase' | 'lowercase' | 'capitalize';
type Adult = IUser

//Функции
function sum(a: number, b: number): number {
  const result: number = a + b;
  console.log(`Sum: ${ result }`);
  return result;
}

sum(3, 6);

function formatText(text: string, format: textFormat): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  } else if (format === 'lowercase') {
    return text.toLowerCase();
  } else {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
}

console.log(formatText("hello world", "capitalize"));
console.log(formatText("hello world", "uppercase"));
console.log(formatText("hello world", "lowercase"));

function removeChar(text: string, char: string): string {
  if (!char) {
     return text;
  }
  return text.replaceAll(char, '');
}

console.log(removeChar("hello world", "l"));
console.log(removeChar("привет мирр", "р"));
console.log(removeChar("test@@test", "@"));

//Массив.
const users: IUser[] = [
  { id: 1, name: 'Алексей Смирнов', email: 'alex@dev.ru', age: 28 },
  { id: 2, name: 'Мария Петрова', email: 'maria@test.ru', age: 30 },
  { id: 3, name: 'Иван Иванов', email: 'ivan@mail.ru', age: 22 },
  { id: 4, name: 'Елена Козлова', email: 'elena@work.ru', age: 35 }
]

const adults: Adult[] = users.filter((user): user is Adult =>
  user.age !== undefined && user.age > 25
);

console.log(adults);
