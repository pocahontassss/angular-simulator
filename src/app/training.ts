interface IUser {
    name: string;
    age: number;
    email?: string;
}

interface IAdmin extends IUser {
    role: string;
    experience: number;
}

let admin: IAdmin = {
    name: "Galim",
    age: 27,
    role: "Admin",
    experience: 1
}

let status1: "loading" | "success" | "error";
status1 = "success";

let textFormat: "uppercase" | "lowercase" | "capitalize";
textFormat = "uppercase"

function sum(a: number, b: number):number {
    return a + b
}

console.log(sum(5, 7));

function formatString (text: string, mode: "uppercase" | "lowercase" | "capitalize"): string {
    if(mode === "uppercase") {
        return text.toUpperCase();
    }

    if(mode === "lowercase") {
        return text.toLowerCase();
    }

    if(mode === "capitalize") {
        return text[0].toUpperCase() + text.slice(1);
    }

    return text
}

console.log(formatString("Angular", "uppercase"));

function removeSymbol(text: string, symbol: string): string {
  return text.replaceAll(symbol, "");
}

console.log(removeSymbol("Angular!", "!"));

const users: IUser[] = [
  { name: "Галим", age: 27, email: "galim@mail.com" },
  { name: "Максим", age: 35 },
  { name: "Иван", age: 21, email: "ivan@mail.com" }
];

const adults = users.filter((user) => user.age > 21);

console.log(adults);



