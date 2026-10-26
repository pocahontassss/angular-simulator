// Задание 6. Описание пользователя.
interface IUser {
  id: number;
  name: string;
  surname?: string;
  email: string;
  age: number;
}

// Задание 7. Описание студента.
interface IStudent extends IUser {
  course: string;
  group: string;
}

// Задание 4. Статус загрузки.
let uploadStatus: 'loading' | 'success' | 'error' = 'loading';
// Задание 5. Формат текста.
let textFormat: 'uppercase' | 'lowercase' | 'capitalize' = 'uppercase';

const user: IUser = {
  id: 1,
  name: 'Анна',
  email: 'anna@example.com',
  age: 20,
};

const student: IStudent = {
  id: 2,
  name: 'Иван',
  email: 'ivan@example.com',
  age: 21,
  course: 'Frontend',
  group: 'Группа 16',
};

// Задание 10. Массив пользователей.
const users: IUser[] = [
  user,
  student,
  {
    id: 3,
    name: 'Олег',
    email: 'oleg@example.com',
    age: 16,
  },
  {
    id: 4,
    name: 'Елена',
    email: 'elena@example.com',
    age: 18,
  },
];

const adultUsers: IUser[] = users.filter((item: IUser) => item.age >= 18);

// Задание 3. Сложение двух чисел.
function sum(a: number, b: number): number {
  return a + b;
}

// Задание 8. Форматирование строки.
function formatText(text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }

  if (format === 'lowercase') {
    return text.toLowerCase();
  }

  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Задание 9. Удаление символа из строки.
function removeSymbol(text: string, symbol: string): string {
  return text.replaceAll(symbol, '');
}

console.log('training.ts подключён');
console.log('Сумма:', sum(2, 3));
console.log('Статус загрузки:', uploadStatus);
console.log('Формат текста:', textFormat);
console.log('Пользователь:', user);
console.log('Студент:', student);
console.log('Выбранный формат:', formatText('ПрИвЕт', textFormat));
console.log('lowercase:', formatText('ПрИвЕт', 'lowercase'));
console.log('capitalize:', formatText('ПрИвЕт', 'capitalize'));
console.log('Без буквы а:', removeSymbol('банан', 'а'));
console.log('Без пробелов:', removeSymbol('Привет мир', ' '));
console.log('Все пользователи:', users);
console.log('Совершеннолетние:', adultUsers);