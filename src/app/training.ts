const users: IUser[] = [
  { id: 2, name: 'Ольга', age: 25, email: 'Olga@test.com' },
  { id: 3, name: 'Али', age: 12, email: 'Ali@test.com' },
  { id: 4, name: 'Мурад', age: 23, email: 'Murad@test.com' }
];

const filtrId: IUser[] = users.filter((user: IUser) => {
  return user.id >= 3;
});

console.log(filtrId);

interface IUser {
  name: string,
  email: string,
  id: number,
  age?: number
};

export interface IExtendedUser extends IUser {
  salary: number;
};

export type UploadStatus = 'loading' | 'success' | 'error'
export let uploadStatus: UploadStatus = 'success';

export type TextFormat = 'uppercase' | 'lowercase' | 'capitalize'
export let textFormat: TextFormat = 'lowercase';

export function formatString(str: string, format: TextFormat): string {

  if (format === 'uppercase') {
    return str.toUpperCase()
  } else if (format === 'lowercase') {
    return str.toLowerCase()
  } else if (format === 'capitalize') {
    return str.charAt(0).toLowerCase() + str.slice(1).toLowerCase();
  }
  return str;
};

export function removeChar(str: string, char: string): string {
  return str.split(char).join('');
};

export function suma(a: number, b: number): number {
  return a + b
};

const filteredByName: IUser[] = users.filter((user: IUser): boolean => {
  return user.name.startsWith('A')
});