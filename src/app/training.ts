/*3. Создать функцию, которая принимает 2 числа и возвращает их сумму. 
 Полностью типизировать параметры, значение, возвращаемое функцией.*/
export const sum = (a:number, b:number):number => {
  return a + b;
}
console.log(sum(19, 29));

/*4. Создать переменную status, которая может быть только: 
"loading", "success", "error".*/
let status: 'loading' | 'succes' | 'error';

/*5. Создать переменную textFormat, которая может быть только: 
'uppercase', 'lowercase', 'capitalize'".*/
let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

/*6. Создать интерфейс, который описывает юзера. 
Поля на ваш выбор. Одно поле должно быть опциональным.*/
interface User {
  age: number,
  height: number,
  weight?: number,
  name: string,
  country: string,
  city: string
}

let user: User = {
  age: 21,
  height: 175,
  name: 'Dante',
  country: 'Kazakhstan',
  city: 'Astana'
}

/*7. Создать интерфейс, который расширяется интерфейсом 
User с задания №5 и имеет свои дополнительные поля */
interface Programmers extends User {
  level: string,
  stack: string,
  experience: number,
  salary: number
}

let programmer: Programmers = {
  age: 21,
  height: 175,
  name: 'Dante',
  country: 'Kazakhstan',
  city: 'Astana',
  level: 'middle',
  stack: 'Angular',
  experience: 2,
  salary: 2000
}

/*8. Создать функцию, которая принимает строку и вариант,  
как именно форматировать строку (задание №5) и на основе 
этого возвращает форматированную строку.*/
const formatString = (line: string, textFormat: 'uppercase' | 'lowercase' | 'capitalize'): string => {
  if (textFormat === 'uppercase') {
    return line.toUpperCase();
  }
  else if (textFormat === 'lowercase') {
    return line.toLowerCase();
  }
  else {
    return line.charAt(0).toUpperCase() + line.slice(1).toLowerCase();
  }
}
console.log(formatString('angular', 'capitalize'));

/*9. Создать функцию, которая принимает строку и символ, 
возвращает строку без переданного символа.  
(есть специальные методы для этого, гуглим)*/
const truncates = (line: string, symbol: string):string => {
  return line.replaceAll(symbol, '');
}
console.log(truncates('Hello', 'lo'));

/*10. Создать массив объектов на основе интерфейса с задания №6. 
Отфильтровать его по одному из параметров.*/
let earthlings: User[] = [
  {
    age: 18,
    name: 'Ibragim',
    height: 175,
    country: 'Kazakhstan',
    city: 'Astana'
  },
  {
    age: 18,
    name: 'Isabella',
    height: 172,
    country: 'Italy',
    city: 'Palermo'
  },
  {
    age: 18,
    name: 'Enzo',
    height: 180,
    country: 'Italy',
    city: 'Palermo'
  }
]

const country = earthlings.filter(earthman => earthman.country === 'Italy');
console.log(country);