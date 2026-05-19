//пункт 6
interface IUser {
  name: string;
  age: number; 
  city?: string;
}
let user: IUser = {
  name: 'Nina',
  age: 30,
  city: 'Dubai'
}
//пункт 7
interface IAdmin extends IUser {
  email: string;
}

let admin: IAdmin = {
  name: 'Kola',
  age: 28,
  email: 'gays28@MinValidationError.com'
}

//пункт 4
let instatus: "loading"| "success"| "error";
instatus = "loading"
instatus = "success"
instatus = "error"

//5 пункт
let textFormat:  'uppercase'|  'lowercase' | 'capitalize';
textFormat = 'uppercase'
textFormat = 'lowercase'
textFormat = 'capitalize'

//пункт 3
function addNumbers(a: number, b: number): number {
    return a + b;
}
addNumbers(10, 20)

//пункт 8
function changeLine(text: string, format:'uppercase'|  'lowercase' | 'capitalize'): string {
  if (format === 'uppercase') {
    return text.toUpperCase()
  } else if (format === 'lowercase') {
    return text.toLowerCase();
  } else{
    return text
  }
}
//пункт 9 
function convertString(text: string, symbol: string): string {
  return text.replaceAll(symbol,'')
}
//пункт 10 
let users: IUser[] = 
[
{name: 'danil', age: 15},
{name: 'tany', age: 20},
{name: 'uly', age: 35}
]
let filteredUsers = users.filter((users) => {
  return users.age >= 18;
});