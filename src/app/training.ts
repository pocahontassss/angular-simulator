export interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  phone?: string;
}

export interface IAdminUser extends IUser {
  role: 'admin' | 'superadmin';
  permissions: string[];
}

export type UploadStatus = 'loading' | 'success' | 'error';
export let uploadStatus: UploadStatus = 'loading';

export type TextFormat = 'заглавная буква' | 'строчная буква';
export let textFormat: TextFormat = 'заглавная буква';

export function calculateSum(firstNum: number, secondNum: number): number {
  return firstNum + secondNum;
}

export function formatString(text: string, format: TextFormat): string {
  if (format === 'заглавная буква') {
    return text.toUpperCase();
  }
  return text.toLowerCase();
}

export function removeCharacter(text: string, charToRemove: string): string {
  return text.replaceAll(charToRemove, '');
}

export const usersList: IUser[] = [
  { id: 1, name: 'Алексей', email: 'alex@example.com', age: 24, phone: '+79990001122' },
  { id: 2, name: 'Иван', email: 'ivan@example.com', age: 17 },
  { id: 3, name: 'Мария', email: 'maria@example.com', age: 29, phone: '+79993334455' },
  { id: 4, name: 'Дарья', email: 'daria@example.com', age: 16 }
];

export const adultUsers: IUser[] = usersList.filter((user: IUser): boolean => user.age >= 18);