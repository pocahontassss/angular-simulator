/* Домашнее задание №14:
Основываясь на данной лекции (https://www.youtube.com/watch?v=2pbQL78d36w):
1. Узнать, что такое форк и как его делать. Форкнуть репозиторий (https://github.com/pocahontassss/angular-simulator). Далее клонируем и работаем в нём.  Дальнейшая разработка будет происходить внутри вашего форка.  ДЗ нужно отправлять на ВАШ форк, а не на мой репозиторий, узнать как это делать правильно.

2. Создать файл в папке "app" под названием "training.ts", подключить его в app.component.ts. */

// 3. Создать функцию, которая принимает 2 числа и возвращает их сумму. Полностью типизировать параметры, значение, возвращаемое функцией.
function sum(a: number, b: number): number {
  return a + b;
}

// 4. Создать переменную status, которая может быть только: "loading", "success", "error".
let status1: "loading" | "success" | "error"

// 5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".
let textFormat: 'uppercase' | 'lowercase' | 'capitalize'

// 6. Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.
interface IUser {
  id: number,
  name: string,
  surname: string,
  age?: number
}

// 7. Создать интерфейс для админа, который расширяется интерфейсом User с задания №5 и имеет свои дополнительные поля, присущие администратору
interface IAdmin extends IUser {
  role: string,
  isAdmin: boolean,
}

// 8. Создать функцию, которая принимает строку и вариант, как именно форматировать строку (задание №5) и на основе этого возвращает форматированную строку.
function formatString(str: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (format === 'uppercase') {
    return str.toUpperCase()
  } else if (format === 'lowercase') {
    return str.toLowerCase()
  } else if (format === 'capitalize') {
    return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase()
  } else {
    return str
  }
}

// 9. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа. 
function removeChar(str: string, char: string): string {
  return str.replaceAll(char, '')
}

// 10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров
const users: IUser[] = [
  { id: 1, name: 'Ivan', surname: 'Ivanov', age: 25 },
  { id: 2, name: 'Anna', surname: 'Sidorova' },
  { id: 3, name: 'Petr', surname: 'Petrov', age: 30 }
];

const filtredUsers = users.filter((user: IUser) => {
  return user.age !== undefined
})