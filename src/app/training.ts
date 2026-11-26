export interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number; 
}
export interface IAdmin extends IUser {
  role: 'admin' | 'superadmin'; 
  permissions: string[]; 
}

type UploadStatus = "loading" | "success" | "error";
let uploadStatus: UploadStatus = "loading"; 
type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';
let textFormat: TextFormat = 'uppercase';

function sum(a: number, b: number): number {
  return a + b;
}
console.log("Сумма 5 и 10:", sum(5, 10));


function formatString(str: string, format: TextFormat): string {
  switch (format) {
    case 'uppercase':
      return str.toUpperCase();
    case 'lowercase':
      return str.toLowerCase();
    case 'capitalize':
      if (str.length === 0) return str;
      
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    default:
      return str;
  }
}
console.log("Форматирование:", formatString("привет МИР", "capitalize"));


function removeCharacter(str: string, charToRemove: string): string {
  
  return str.replaceAll(charToRemove, '');
}
console.log("Удаление 'o':", removeCharacter("Hello World", "o"));


const users: IUser[] = [
  { id: 1, name: "Алексей", email: "alex@mail.ru", age: 25 },
  { id: 2, name: "Мария", email: "maria@mail.ru", age: 30 },
  { id: 3, name: "Иван", email: "ivan@mail.ru" }, 
  { id: 4, name: "Ольга", email: "olga@mail.ru", age: 22 }
];

const filteredUsers = users.filter((user) => user.age !== undefined && user.age > 23);

console.log("Отфильтрованные пользователи:", filteredUsers);