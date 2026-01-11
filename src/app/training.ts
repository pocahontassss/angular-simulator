export interface IUser {
  name: string;
  age: number;
  email?: string;
}

export interface IExtendedUser extends IUser {
  role: string;
}

export let status: "loading" | "success" | "error";
export let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

export function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));

export function formatText(text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
}

console.log(formatText('hello world', 'capitalize'));

export function removeChar(str: string, char: string): string {
  return str.replaceAll(char, '');
}

console.log(removeChar('hello -world', '-'));

export const users: IUser[] = [
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30, email: 'charlie@example.com' }
];

export const filteredUsers = users.filter(user => user.age >= 18);

console.log(filteredUsers);
