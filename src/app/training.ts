export interface IUser {
  name: string;
  age: number;
  email?: string;
}

export interface ISystemUser extends IUser {
  role: string;
}

export let status: "loading" | "success" | "error";
export let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

export function calculateSum(a: number, b: number): number {
  return a + b;
}

console.log(calculateSum(5, 10));

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

export const users: ISystemUser[] = [
  { name: 'Alice', age: 25, email: 'alice@example.com', role: 'admin' },
  { name: 'Bob', age: 17, role: 'user' },
  { name: 'Charlie', age: 30, email: 'charlie@example.com', role: 'moderator' },
];

export const filteredUsers = users.filter(user => user.age >= 18);

console.log(filteredUsers);
