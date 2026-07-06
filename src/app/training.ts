export interface IUser {
    name: string;
    age: number;
    email?: string;
}

export interface IAdmin extends IUser {
    role: string;
    permissions: string[];
}

export type TStatus = "loading" | "success" | "error";
export const status: TStatus = "success";

export type TTextFormat = 'uppercase' | 'lowercase' | 'capitalize';
export const textFormat: TTextFormat = 'capitalize';

export function sum(a: number, b: number): number {
    return a + b;
}

export function formatString(str: string, format: TTextFormat): string {
    switch (format) {
        case 'uppercase': return str.toUpperCase();
        case 'lowercase': return str.toLowerCase();
        case 'capitalize': return str.charAt(0).toUpperCase() + str.slice(1);
        default: return str;
    }
}

export function removeChar(str: string, char: string): string {
    return str.split(char).join('');
}

export const users: IUser[] = [
    { name: "Гульнара", age: 20, email: "gulnara@test.com" },
    { name: "Иван", age: 17 },
    { name: "Анна", age: 25, email: "anna@test.com" }
];

export const adults = users.filter(user => user.age >= 18);
