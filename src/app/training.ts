
// 4. Создать переменную status, которая может быть только: "loading", "success", "error" 

let state: "loading"| "success"| "error"; 

// 5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'"

let textFormat: 'uppercase'| 'lowercase'| 'capitalize';

// 6. Создать интерфейс, который описывает юзера. Поля на ваш выбор.

interface IUser {
  name: string;
  surname: string;
  age: number;
  city: string;
};

// 7. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля.

interface ICarUser extends IUser {
  model: string;
  power: number;
};

// 3. Создать функцию, которая принимает 2 числа и возвращает их сумму.
  function sumNumbers (one: number, two: number): number {
     return one + two;
  }
  console.log(sumNumbers(1, 2)); 

// 8. Создать функцию, которая принимает строку и вариант,  как именно форматировать строку (задание №5) и на основе этого возвращает форматированную строку.

function formatText ( a: string, b: 'uppercase'| 'lowercase'| 'capitalize') {
  if ( b === 'uppercase') {
    return a.toUpperCase();
  } else if (b === 'lowercase') {
    return a.toLowerCase();
  } else if (b === 'capitalize'){
    return a[0].toUpperCase() + a.slice(1);
  }
  return a;
};

// 9.Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.

function removeCharacter(text: string, charToRemove: string): string {
  return text.replaceAll(charToRemove, '');
};

// 10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров.

const users: IUser[] = [
  {
    name: 'Николай',
    surname: 'Сазонов',
    age: 27,
    city: 'Иркутск'
  },
  {
    name: 'Иван',
    surname: 'Иванов',
    age: 30,
    city: 'Москва'
  },
  {
    name: 'Сергей',
    surname: 'Мушкин',
    age: 16,
    city: 'Йошкар-Ола'
  }
]

const newUser = users.filter ((user) => {
  return user.age < 28;
});


