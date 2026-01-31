//создвть функцию которая возвращает сумму двух чисел. полностью типизировать
function sum(a:number, b:number):number {
  return a + b;
}


//создать переменную которая может быть только:
//"loading", "success", "error".
let statuss: "loading" | "success" | "error";

//создать переменную которая может быть только:
//'uppercase', 'lowercase', 'capitalize'".
let textFormat: 'uppercase' | 'capitalize' | 'lowercase';

// Создать интерфейс, который описывает юзера.
interface IUser {
  name: string;
  age: number;
  status?: string;
}

//создать интерфейс унаследованный от IUser
interface IStudent extends IUser {
  evaluations: number
}

//создать функцию которая  которая принимает строку и вариант,
//как именно форматировать строку (задание №5) и на основе этого возвращает форматированную строку.
function format(str: string, option: string): string {
  if (textFormat == 'uppercase') {
    return str.toUpperCase();
  } if (textFormat == 'capitalize') {
    return str.charAt(0).toUpperCase() + str.charAt(1).toLowerCase();
  } if (textFormat == 'lowercase') {
    return str.toLowerCase()
  }
  return str
}
// Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.
function removeChar(str: string, char: string): string[] {
    return str.split(char);
}

// Создать массив объектов на основе интерфейса с задания №6.
// Отфильтровать его по одному из параметров
let users: IUser[] = [
  {
    name: 'ibragim',
    age: 15,
  },
  {
    name: 'vladislav',
    age:20,
  },
  {
    name: 'alex',
    age:28
  }
]

let filterObject = users.filter(user => user.age < 25)
