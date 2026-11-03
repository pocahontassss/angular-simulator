export interface IUser {
  id: number;
  name: string;
  email?: string;
}

export interface IAdmin extends IUser {
  role: string;
  accessLevel: number;
}

let uploadStatus: 'loading' | 'success' | 'error' = 'loading';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize' = 'capitalize';

export function sum(a: number, b: number): number {
  return a + b;
}

export function formatText(text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  } else if (format === 'lowercase') {
    return text.toLowerCase();
  } else if (format === 'capitalize') {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
  return text;
}

export function removeChar(text: string, char: string): string {
  return text.replaceAll(char, '');
}

export const user1: IUser = {
  id: 1,
  name: 'Муслим',
};

export const admin1: IAdmin = {
  id: 2,
  name: 'Директор',
  role: 'admin',
  accessLevel: 10,
};

export const users: IUser[] = [
  { id: 5, name: 'Анна', email: 'mdzuraev.ccm@gmail.com' },
  { id: 8, name: 'Муслим', email: 'mdzhuraev@gmail.com' },
  { id: 12, name: 'Артур' },
  { id: 14, name: 'Юсуф' },
];

export const filteredUsers = users.filter((user) => user.id > 10);
export const usersWithEmails = users.filter((user) => user.email !== undefined);
export const usersStartingWithM = users.filter((user) => user.name.startsWith('М'));
