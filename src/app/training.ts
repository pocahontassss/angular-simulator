

// ==== Переменные ====

// №4
let uploadStatus: "loading" | "success" | "error";
uploadStatus = "error"

// №5
let textFormat: "uppercase" | "lowercase" | "capitalize";


// ==== Интерфейсы ====

// №6
interface IUser {
  firstName: string;
  lastName: string;
  age: number;
}

// №7
interface IAdmin extends IUser {
  isAdmin: boolean;
}


// ==== Функции ====

// №3
function sum(a: number, b: number) : number {
  return a + b;
}

sum(7, 10)

// №8
function changeText(text: string, format: typeof textFormat): string {
  if (format === "uppercase") {
    return text.toUpperCase()
    } else if (format === "lowercase") {
      return text.toLowerCase()
    } else if (format === "capitalize") {
      return text[0].toUpperCase() + text.slice(1).toLowerCase()
    }
  return "Не правильное занчение"
}
textFormat = "uppercase";
changeText("Hello", textFormat);

// №9
function censorText(text: string, targetChar: string) {
  return text.replaceAll(targetChar, "");
}

const text = censorText("Goodbye world", "o");

// №10
const users: IUser[] = [
  {
    firstName: "Islam",
    lastName: "Mankiev",
    age: 32
  },
  {
    firstName: "Ali",
    lastName: "Dolgiev",
    age: 22
  },
  {
    firstName: "Abubakr",
    lastName: "Shibilov",
    age: 12
  }
]

const ageLessThan18 = users.filter(user => user.age < 18)