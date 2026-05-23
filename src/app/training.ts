let uploadStatus: 'loading' | 'success' | 'error';
let textFormat: 'uppercase'| 'lowercase' | 'capitalize';


interface IUser {
  name: string;
  surname: string;
  age: number;
  country: string;
  city: string;
  email: string;
  phoneNumber?: number;
};

interface IuserCar extends IUser {
  carBrand: string;
  carModel: string;
  carNumber: string;
  carColor: string;
};

const userData: IUser[] = [
  {
    name: 'Salim Muhammad',
    surname: 'Al Dawsari',
    age: 34,
    country: 'Saudi Arabia',
    city: 'Ar Riyad',
    email: 'Salim82@gmail.com',
    phoneNumber: 966114618050,
  },

  {
    name: 'Pavel',
    surname: 'Mikoylenko',
    age: 33,
    country: 'Ukraine',
    city: 'Odessa',
    email: 'Pavel784@gmail.com',
    phoneNumber: 380444618034,
  },

  {
    name: 'Aleksandr',
    surname: 'Ivanov',
    age: 29,
    country: 'Russia',
    city: 'Chelyabinsk',
    email: 'Ivanov8121@gmail.com',
    phoneNumber: 79137281932,
  },

  {
    name: 'Alex',
    surname: 'Sanchez',
    age: 43,
    country: 'Spain',
    city: 'Madrid',
    email: 'AlexSpain@gmail.com',
    phoneNumber: 346077392823,
  },
];

const usersFromSpain: IUser[] = userData.filter(countryUser => countryUser.country === "Spain");

console.log(usersFromSpain);


function sumNumbers(numberOne: number, numberTwo: number): number {
  return numberOne + numberTwo;
};
console.log(sumNumbers(3, 6));

function changeFormatText(text: string, textFormat: 'uppercase'| 'lowercase' | 'capitalize'): string {
  switch (textFormat) {
    case 'uppercase':
    return text.toUpperCase();
    case 'lowercase':
    return text.toLowerCase();
    case 'capitalize':
    return text[0].toUpperCase() + text.slice(1);
  };
};

console.log(changeFormatText('автомобиль', 'capitalize'));

function deleteSymbol(text: string, symbol: string): string {
  return text.replaceAll(symbol,'');
};

console.log(deleteSymbol("user@gmail.com", "@"));
