function sum(a: number, b: number): number{
  return a + b;
}

sum(2, 3);

let uploadStatus: "loading" | "success" | "error";
let textFormat: "uppercase" | "lowercase" | "capitalize";

interface IUser {
  name: string;
  age: number;
  email?: string;
}

interface IAdmin extends IUser {
  role: string;
}

function formatText(text: string, format: "uppercase" | "lowercase" | "capitalize"): string {
  switch (format) {
    case "uppercase":
      return text.toUpperCase();
    case "lowercase":
      return text.toLowerCase();
    case "capitalize":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
}

function removeChar(text: string, char: string): string {
  return text.replaceAll(char, "");
}

const user: IUser[] = [
  {name: "Ysuf", age: 18},
  {name: "Usman", age: 18, email: "usman@example.com"},
  {name: "Abdullah", age: 21, email: "abdullah@example.com"},
  {name: "Hakim", age: 18}
];

const filteredUsers = user.filter((user) => user.email !== undefined);



