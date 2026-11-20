
export interface IUser {
  name: string;
  age: number;
  email?: string;
}

// IExtendedUser расширяет IUser и добавляет два новых свойства.
export interface IExtendedUser extends IUser {
  phone: string;
  isAdmin: boolean;
}

// Omit — исключает указанное свойство из существующего типа.
// IUser — исходный интерфейс пользователя.
// 'email' — название свойства, которое нужно исключить.
// В результате создаётся новый тип пользователя без свойства email.
type IUserWithoutEmail = Omit<IUser, 'email'>;

// UploadStatus — тип, который разрешает только три указанных значения.
type UploadStatus = 'загрузка' | 'успех' | 'ошибка';

// TextFormat — тип, который разрешает только три варианта форматирования.
type TextFormat = 'прописная' | 'строчная' | 'заглавная';

// uploadStatus — переменная со статусом загрузки.
let uploadStatus: UploadStatus = 'загрузка';

// textFormat — переменная с вариантом форматирования текста.
let textFormat: TextFormat = 'прописная';

// users — массив пользователей, каждый объект соответствует интерфейсу IUser.
const users: IUser[] = [
  {
    name: 'Александр',
    age: 22,
    email: 'alex@mail.com',
  },
  {
    name: 'Мария',
    age: 28,
  },
  {
    name: 'Дмитрий',
    age: 35,
    email: 'dmitry@mail.com',
  },
];

// filteredUsers — переменная, в которой будет храниться результат фильтрации.
// IUser[] — указываем, что результатом должен быть массив объектов IUser.
// users — исходный массив пользователей.
// .filter() — метод массива, который отбирает элементы по условию.
// user — параметр функции, представляющий одного пользователя из массива.
// => — стрелочная функция, указывающая, что нужно выполнить после получения user.
// user.age — обращаемся к свойству age (возраст) текущего пользователя.
// > 25 — условие: возраст должен быть больше 25.
// Если условие true (истина), пользователь попадёт в новый массив.
// Если условие false (ложь), пользователь не попадёт в новый массив.
const filteredUsers: IUser[] = users.filter((user) => user.age > 25);

// sum — функция, которая принимает два числа и возвращает их сумму.
export function sum(a: number, b: number): number {
  return a + b;
}

// formatText — функция форматирования текста.
// text — исходный текст.
// format — выбранный вариант форматирования.
// string — функция возвращает строку.
export function formatText(text: string, format: TextFormat): string {
  if (format === 'прописная') {
    return text.toUpperCase();
  }

  if (format === 'строчная') {
    return text.toLowerCase();
  }

  // charAt(0) получает первый символ строки.
  // slice(1) берёт строку начиная со второго символа.
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Create — создаёт новый объект без указанного свойства.
// T — тип переданного объекта.
// K — тип ключа (названия свойства).
// keyof T — все допустимые названия свойств объекта.
// K extends keyof T — разрешает передавать только существующее свойство.
// Omit<T, K> — тип результата без исключённого свойства.
// [key] — обращение к свойству по переданному имени.
// ...result — собирает все остальные свойства в новый объект.
// return result — возвращает новый объект.
export function Create<T extends object, K extends keyof T>(
  user: T,
  key: K
): Omit<T, K> {
  const { [key]: removed, ...result } = user;
  return result;
}
