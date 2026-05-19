//3. Создать функцию, которая принимает 2 числа и возвращает их сумму. Полностью типизировать параметры, значение, возвращаемое функцией.
function sumNumber(a: number, b: number): number {
  return a + b;
}
console.log(sumNumber(1, 1));

//4. Создать переменную status, которая может быть только: "loading", "success", "error".
let appStatus: 'loading' | 'success' | 'error';

//5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".
let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

//6. Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.
interface User {
  name: string;
  surname: string;
  age: number;
  height: number;
  weight?: number;
}

//7. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля 
interface Admin extends User {
  success: boolean;
}

//8. Создать функцию, которая принимает строку и вариант,  как именно форматировать строку (задание №5) и на основе этого возвращает форматированную строку.
function formatString(a: string, b: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (b === 'uppercase') {
    return a.toUpperCase();
  } else if (b === 'lowercase') {
    return a.toLowerCase();
  }
  return a;
}

console.log(formatString('big word', 'uppercase'));

//9. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа. 
function changeWord(a: string, b: string): string {
  return a.replaceAll(b, '');
}
console.log(changeWord('banana', 'n'));

//10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров
let userInfo: User[] = [
  {
    name: 'Ilya',
    surname: 'Grigorov',
    age: 19,
    height: 187,
    weight: 90
  },
  {
    name: 'Alexey',
    surname: 'Colpokov',
    age: 45,
    height: 185,
    weight: 85
  },
  {
    name: 'Vladimir',
    surname: 'Victorovich',
    age: 35,
    height: 190,
    weight: 80
  }
]

const newUSer = userInfo.filter((user) => {
  return user.age > 20
});
console.log(newUSer);
