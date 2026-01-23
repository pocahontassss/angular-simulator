// 1. Создать функцию, которая принимает 2 числа и возвращает их сумму.

function sum(a: number, b: number): number {
  return a + b
};

// 2. Создать переменную status, которая может быть только: "loading", "success", "error".

let statuss: 'loading' | 'success' | 'error'

// 3. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".

let textFormat: 'uppercase' | 'lowercase' | 'capitalize'

// 4.Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.

interface IUser {
  name: string;
  surname: string;
  age?: number;
};

// 5. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля 

interface IStudent extends IUser {
  studentID: number;
  course: number;
};

let student: IStudent = {
  name: 'Иван',
  surname: 'Иванов',
  age: 19,
  studentID: 1,
  course: 2,
};

// 6. Создать функцию, которая принимает строку и вариант.

function formatString(line: string, variant: 'uppercase' | 'lowercase' | 'capitalize'): string {
  switch (variant) {
    case 'uppercase':
      return line.toUpperCase();
    case 'lowercase':
      return line.toLowerCase();
    case 'capitalize':
      return line[0].toUpperCase() + line.slice(1);
  }
};

// 7. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.

function removeSymbol(text: string, symbol: string): string {
  return text.replace(symbol, '')
};

// 8. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров.

const users: IUser[] = [
  {
  name: 'Саша', 
  surname: 'Петров', 
  age: 21 
  },

  {
  name: 'Евгений', 
  surname: 'Петров', 
  age: 33
  },

  {
  name: 'Анатолий',
  surname: 'Петров'
  },

  {
  name: 'Петр', 
  surname: 'Петров'
  }
]

const getUser = users.filter(user => user.age);