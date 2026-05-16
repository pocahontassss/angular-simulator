interface IUser {
  name: string;
  surname: string;
  passportId: number;
  age: number;
  isMarried?: boolean;
  gender: 'male' | 'female';
  sayHi():void;
}

interface iUserIndia extends IUser {
  kasta: string;
  money: string;
}


const allen: IUser = {
  name: 'Allen',
  surname: 'Walker',
  passportId: 123,
  age: 18,
  gender: 'male',
  sayHi() {
    console.log('hi i am Allen');
  }
}
allen.sayHi();

const usersArr: IUser[] = [
  {
    name: 'Allen',
    surname: 'Walker',
    passportId: 123,
    age: 18,
    isMarried: true,
    gender: 'male',
    sayHi() {
      console.log('hi i am Allen');
    }
  },
  {
    name: 'Mike',
    surname: 'Lebovski',
    passportId: 124,
    age: 19,
    gender: 'male',
    sayHi() {
      console.log('hi i am Mike');
    }
  },
  {
    name: 'Jacob',
    surname: 'Stinger',
    passportId: 125,
    age: 56,
    isMarried: false,
    gender: 'male',
    sayHi() {
      console.log('hi i am Jacob');
    }
  },
  {
    name: 'Raik',
    surname: 'Londo',
    passportId: 126,
    age: 49,
    gender: 'male',
    sayHi() {
      console.log('hi i am Mike');
    }
  }
]

let statusPage: 'loading' | 'success' | 'error';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

const youngMen = usersArr.filter(user => user.age < 25);
console.log(youngMen);


function sum(first: number, second: number): number{
  return first + second;
}
console.log(sum(15, 15));

function formatString(str: string, format: typeof textFormat):string {
  if (format === 'uppercase') return str.toUpperCase();
  if (format === 'lowercase') return str.toLowerCase();
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
textFormat = 'uppercase';
console.log(formatString('garDenScapeRs', textFormat));

function deleteSymbolFromString(str: string, symb: string): string {
  return str.replaceAll(symb, '');
}
console.log(deleteSymbolFromString('name', 'a'));