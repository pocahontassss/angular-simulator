interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  car: boolean;
  img?: string;
}

interface IDeveloper extends IUser {
  skills: string;
  experience: boolean;
  phoneNumber: number;
}

// #3
const sum = (a: number, b: number): number => {
  return a + b;
};

const result: number = sum(13, 17);
console.log(result);

// #4 ***********************

export let status: 'loading' | 'success' | 'error';

status = 'loading';
status = 'error';
status = 'success';
console.log(status);

// #5 ************************

export let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

textFormat = 'uppercase';
textFormat = 'lowercase';
textFormat = 'capitalize';

console.log(textFormat);

// #6 ************************

const person: IUser = {
  id: 1,
  name: 'Aisha',
  email: 'aisha@gmail.com',
  age: 11,
  car: true,
};
console.log(person);

// #7 **************************

const developer: IDeveloper = {
  id: 1,
  name: 'Aisha',
  email: 'aisha@gmail.com',
  age: 11,
  car: true,
  skills: 'JavaScript',
  experience: true,
  phoneNumber: 996555667788,
};
console.log(developer);

// #8 ********************************

type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

const formatTextString = (text: string, format: TextFormat): string => {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();

    case 'lowercase':
      return text.toLowerCase();

    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
};
console.log(formatTextString('salam everyone', 'capitalize'));

// #9 ************************************

const replaceCharacter = (text: string, character: string): string => {
  return text.replaceAll(character, '***');
};
console.log(replaceCharacter('cat', 'c'));

// #10 ***********************************

const persons: IUser[] = [
  {
    id: 1,
    name: 'Aisha',
    email: 'aisha@gmail.com',
    age: 11,
    car: true,
  },
  {
    id: 2,
    name: 'Usuf',
    email: 'usuf@gmail.com',
    age: 14,
    car: true,
  },
  {
    id: 3,
    name: 'Asel',
    email: 'asel@gmail.com',
    age: 44,
    car: false,
  },
];
const students = persons.filter((person) => person.age !== undefined && person.age >= 13);

console.log(students);
