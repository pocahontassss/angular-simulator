//переменные

type TStatus = 'loading' | 'success' | 'error';
let st4tus: TStatus = 'loading';

type TTextFormat = 'uppercase' | 'lowercase' | 'capitalize';
let textFormat: TTextFormat = 'uppercase';


//интерфейсы

interface IUser {
  id: number;
  name: string;
  age: number;
  phone: number;
  adress?: string;
}

interface ISubscriber extends IUser {
  likes: number;
  subscribes: number;
}

//функции

function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(5, 7);
console.log('Результат суммы:', result);

function formatText(str: string, format: TTextFormat): string {
  switch (format) {
    case 'uppercase':
      return str.toUpperCase();

    case 'lowercase':
      if (str.length === 0) return str;
      return str[0].toUpperCase() + str.slice(1).toLowerCase();

    default:
      return str;
  }
}

function removeCharacter(str: string, charToRemove: string): string {
  return str.replaceAll(charToRemove, "");
}


//массивы

const users: IUser[] = [
  {
    id: 1,
    name: "Алексей",
    age: 28,
    phone: 79991112233,
    adress: "Москва, ул. Ленина, д. 5"
  },
  {
    id: 2,
    name: "Мария",
    age: 17,
    phone: 79994445566
  },
  {
    id: 3,
    name: "Иван",
    age: 31,
    phone: 79997778899,
    adress: "Санкт-Петербург, Невский пр., д. 12"
  }
];

const adults = users.filter(user => user.age >= 18);
console.log(adults);



