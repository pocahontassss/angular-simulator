interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number; 
}

interface IEmployee extends IUser {
  position: string;
  salary: number;
}

type UploadStatus = "loading" | "success" | "error";
let UploadStatus = "loading";

type textFormat = "uppercase" | "lowercase" | "capitalize";
let textFormat = "capitalize";

function getSum(a: number, b: number): number {
  return a + b;
}

function stringFormat(text: string, format: textFormat): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }
  if (format === 'lowercase') {
    return text.toLowerCase();
  }
  if (format === 'capitalize') {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return text;
}

function removeLetter(text: string, letterToRemove: string) {
  return text.split(letterToRemove).join('');
}

const usersList: IEmployee[] = [
  {
    id: 1,
    name: 'Ainur',
    email: 'yt.frost@mail.ru',
    age: 25,
    position: 'Frontend Developer',
    salary: 100000
  },
  {
    id: 2,
    name: 'Ilnur',
    email: 'ilnur2034@mail.ru',
    position: 'Backend Developer',
    salary: 120000
  },
  {
    id: 3,
    name: 'Farukh',
    email: 'farukh2034@mail.ru',
    age: 26,
    position: 'Fullstack Developer',
    salary: 200000
  },
];

const filteredUsersBySalary = usersList.filter((user) => user.salary < 150000);
console.log('Сумма: ', getSum(1000, 2020));
console.log('Формат текста: ', stringFormat('Я миддл разработчик', 'uppercase'));
console.log('Удаление буквы: ', removeLetter('Я миддл разработчик', 'д'));
console.log('Отфильтрованные пользователи по зарплате: ', filteredUsersBySalary);