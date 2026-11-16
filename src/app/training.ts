export function calc(a: number, b: number): number {
  return a + b;
}
export type UploadStatus = 'loading' | 'success' | 'error';
export let uploadStatus: UploadStatus = 'loading';
export type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';
export let textFormat: TextFormat = 'uppercase';
export interface IUser {
  name: string;
  age: number;
  email?: string;
}
export interface IUserInfo extends IUser {
  city: string;
  country: string;
}
export const user: IUserInfo = {
  name: 'Sofiya',
  age: 25,
  city: 'New York',
  country: 'USA',
};
export function formatText(text: string, format: TextFormat): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }
  if (format === 'capitalize') {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
}
export function removeSymbol(text: string, symbol: string): string {
  return text.replaceAll(symbol, '');
}
export const users: IUser[] = [
  {
    name: 'Sofiya',
    age: 25,
  },
  {
    name: 'Anna',
    age: 30,
  },
  {
    name: 'Amina',
    age: 28,
  },
  {
    name: 'Maya',
    age: 22,
  },
];

export const adults = users.filter((user) => user.age >= 25);
