//3. Создать функцию, которая принимает 2 числа и возвращает их сумму. Полностью типизировать параметры, значение, возвращаемое функцией.

export function sum(a: number, b: number): number {
  const result: number = a + b;
  return result;
}

//4. Создать переменную uploadStatus, которая может быть только: 'loading', 'success', 'error'.

let uploadStatus: "loading" | "success" | "error";

//5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".

let textFormat: "uppercase" | "lowercase" | " capitalize";


//6. Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

//7. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля

interface AdminUser extends User {
  role: string;
  permissions: string[];
}

//8. Создать функцию, которая принимает строку и вариант,  как именно форматировать строку (задание №5) и на основе этого возвращает форматированную строку.

type FormatType = "upper" | "lower" | "capitalize";

function formatString(value: string, format: FormatType): string {
  if (format === "upper") {
    return value.toUpperCase();
  }

  if (format === "lower") {
    return value.toLowerCase();
  }

  if (format === "capitalize") {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  return value;
}

//9. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.  (есть специальные методы для этого, гуглим)

function removeChar(value: string, charToRemove: string): string {
  return value.split(charToRemove).join("");
}

console.log(removeChar("hello world", "l"));

//10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров

const users: User[] = [
  { 
    id: 1, 
    name: "Alice", 
    email: "alice@example.com", 
    age: 25 
  },
  { 
    id: 2, 
    name: "Bob", 
    email: "bob@example.com" 
  },
  { 
    id: 3, 
    name: "Alice", 
    email: "alice2@example.com", 
    age: 30 
  },
];

const filteredUsers = users.filter((user) => user.name === "Alice");
