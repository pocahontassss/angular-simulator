//4. Создать переменную status, которая может быть только: "loading", "success", "error".
type StatusType = 'loading' | 'error' | 'success';
let errorStatus: StatusType = 'error';

//5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".
type FormatType = 'uppercase' | 'lowercase' | 'capitalize';
let textFormat: FormatType = 'uppercase';

//6. Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.
interface IUser {
  name: string;
  surname: string;
  city?: string;
  phoneNumber: number;
}

// 10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров
const students: IUser[] = [
  {
    name: 'Oleg',
    surname: 'Ivanov',
    phoneNumber: 777666,
  },
  {
    name: 'Andrey',
    surname: 'Ivanov',
    phoneNumber: 763589,
    city: 'Moscow',
  },
];
const filteredStudents = students.filter((student) => student.name === 'Andrey');

//7. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля
interface IExtraUser extends IUser {
  country?: string;
  email: string;
}

//3. Создать функцию, которая принимает 2 числа и возвращает их сумму. Полностью типизировать параметры, значение, возвращаемое функцией.
function getSum(he: number, get: number): number {
  return he + get;
}

//8. Создать функцию, которая принимает строку и вариант,  как именно форматировать строку (задание №5) и на основе этого возвращает форматированную строку.
function man(text: string, format: FormatType): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  } else if (format === 'lowercase') {
    return text.toLowerCase();
  } else if (format === 'capitalize') {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return text;
}

//9. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.  (есть специальные методы для этого, гуглим)
function removeChar(text: string, charToremove: string): string {
  const result = text.replaceAll(charToremove, '');
  return result;
}
