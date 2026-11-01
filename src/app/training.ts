export interface IUser {
  id: number;
  name: string;
  age: number;
  email?: string;
}

export interface IAdmin extends IUser {
  role: string;
  permissions: string[];
}


export type UploadStatus = 'loading' | 'success' | 'error';
export type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

export let uploadStatus: UploadStatus = 'loading';
export let textFormat: TextFormat = 'capitalize';

const admin: IAdmin = {
  id: 1,
  name: 'Егор',
  age: 22,
  email: 'Egor@gmail.com',
  role: 'administrator',
  permissions: ['edit', 'delete'],
}; 


export function sum(firstNumber: number, secondNumber: number): number {
  const result: number = firstNumber + secondNumber;
  return result;
}

export function formatText(text: string, format: TextFormat): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }

  if (format === 'lowercase') {
    return text.toLowerCase();
  }

  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function removeCharacter(text: string, character: string): string {
  return text.replaceAll(character, '');
}


export const users: IUser[] = [
  { id: 1, name: 'Галим', age: 27, email: 'galim@example.com' },
  { id: 2, name: 'Асия', age: 19 },
  { id: 3, name: 'София', age: 32, email: 'sofia@example.com' },
];

export const filteredUsers: IUser[] = users.filter((user) => user.age >= 21);

console.log({
  sum: sum(2, 3),
  uploadStatus,
  textFormat,
  admin,
  formattedText: formatText('пРИВЕТ, мИР!', textFormat),
  textWithoutCharacter: removeCharacter('банан', 'а'),
  filteredUsers,
});
