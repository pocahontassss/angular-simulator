interface IPremiumUser extends IUser {
  subscriptionPlan: 'monthly' | 'yearly';
  premiumSince: Date;
}

interface IUser {
  id: number;
  password: number | string;
  name: string;
  age?: number;
}

const kirill: IPremiumUser = {
  id: 1,
  name: 'kirill',
  password: 123,
  subscriptionPlan: 'monthly',
  premiumSince: new Date()
}

export const users: IUser[] = [
  kirill,
  {id: 2, password: 123, name: 'хайтаб'},
  {id: 3, password: 444, name: 'killer67'},
  {id: 4, password: 12345, name: 'артем'},
  {id: 5, password: 222222222, name: 'лоутаб'},
];

export const filteredUsers = users.filter(user => user.id > 2)

const getSumm = (a: number, b: number): number => {
  return a + b;
}

export const transformText = (string: string, textCase: TextFormat): string => {
  if (textCase === "uppercase") {
    return string.toUpperCase();
  }
  if (textCase === "lowercase") {
    return string.toLowerCase();
  }
  if (textCase === "capitalize") {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  return string;
}

export const deleteSymbol = (text: string, symbol: unknown): string => {
  const target = String(symbol);
  return text.replaceAll(target, '');
}

export let status: "loading" | "success" | "error";
export type TextFormat = "uppercase" | "lowercase" | "capitalize";