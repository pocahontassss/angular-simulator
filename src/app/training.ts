//3. Создать функцию, которая принимает 2 числа и возвращает их сумму. Полностью типизировать параметры, значение, возвращаемое функцией.

export function getSum(a: number, b: number): number {
return a + b;
}

//4. Создать переменную uploadStatus, которая может быть только: "loading", "success", "error".

let uploadStatus: "loading"| "success" | "error";

//5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".

let textFormat: 'uppercase'| 'lowercase'| 'capitalize';

//6. Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.

interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  phone?: string;
}

//7. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля

interface INewUser extends IUser {
  street: string;
}

//8.  Создать функцию, которая принимает строку и вариант,  как именно форматировать строку (задание №5) и на основе этого возвращает форматированную строку.

function getformatText(str: string, format: 'uppercase'| 'lowercase'| 'capitalize'): string {
  switch(format) {
    case 'uppercase':
      return str.toUpperCase();
    case 'lowercase':
      return str.toLowerCase();
    case 'capitalize':
      if (str.length > 0) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase;
      }
    return '';
  }
}

//9. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.  (есть специальные методы для этого, гуглим)

function removeChar(str: string, charRemove: string): string {
  return str.split(charRemove).join('');
}

//10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров

const users: INewUser[] = [
  {
    id: 1,
    name: 'Алексей',
    email: 'aleksey@example.com',
    age: 25,
    phone: '+79991234567',
    street: 'Строителей'
  },
  {
    id: 2,
    name: 'Мария',
    email: 'maria@example.com',
    age: 30,
    street: 'Пражская'
  },
  {
    id: 3,
    name: 'Иван',
    email: 'ivan@example.com',
    age: 22,
    phone: '+79997654321',
    street: 'Новая'
  }
];

const filterUsers = users.filter(user => user.age > 23);


