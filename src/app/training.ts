

// 2 задание 

export function user(name: string, age?: number) {
  return(name)
}


// 3 задание 

function getSum(a: number, b: number) {
  return(a + b)
}

console.log(getSum(10, 5));


// 4 задание 


let status: "loading" | "succes" | "error";
status = 'error'
status = 'loading'
status = 'succes'

console.log(status)

// 5 задание 

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';
textFormat = 'capitalize'
textFormat = 'lowercase'
textFormat = 'uppercase'

// 6 задание 

interface User {
  name: string;
  surname: string;
  age: number;
  email?: string;
}

const user1: User = {
  name: 'Ivan',
  surname: 'Ivanov',
  age: 18
}

console.log(user1)


// 7 Задание 

interface Worker extends User {
  role: string;
  powers: boolean;
}

const superWorker: Worker = {
  name: 'Naim',
  surname: 'Naimov',
  age: 18,
  role: 'Angular-developer',
  powers: true
}

console.log(superWorker);


// 8 задание 


function formatText(text: string, textFormat: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (textFormat === 'uppercase') 
    return text.toUpperCase();
  if (textFormat === 'lowercase')
    return text.toLowerCase();
  return text[0].toUpperCase() + text.slice(1)
}
 
// 9 задание 


function textReplace(text: string, letterRemove: string ) {
  return text.replaceAll(letterRemove, '')
}

console.log(textReplace('Hello my name is Ivan', 'n')
)


// 10 задание 


const users: User[] = [
  {name: "Ivan", surname: 'Ivanov', age: 18},
  {name: 'Max', surname: 'Maxov', age: 99},
  {name: 'Maksim', surname: 'Maksimov', age: 19}
]

const choosen = users.filter(user => user.age <= 98);
console.log(choosen)


