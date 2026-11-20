interface IUser {
  id: number;
  name: string;
  age: number;
  email?: string;
}

interface IAdmin extends IUser {
  role: string;
  permissions: string[];
}
let uploadStatus: "loading" | "success" | "error";

let textFormat: "uppercase" | "lowercase" | "capitalize";
function sum(a: number, b: number): number {
  return a + b;
}
function formatText(
  text: string,
  format: "uppercase" | "lowercase" | "capitalize"
): string {
  switch (format) {
    case "uppercase":
      return text.toUpperCase();

    case "lowercase":
      return text.toLowerCase();

    case "capitalize":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
}
function removeCharacter(text: string, char: string): string {
  return text.replaceAll(char, "");
}
const users: IUser[] = [
  { id: 1, name: "Aisha", age: 30, email: "aisha@mail.com" },
  { id: 2, name: "Ahmad", age: 28, email: "ahmad@mail.com" },
  { id: 3, name: "Muhammad", age: 19, email: "muhammad@mail.com" },
  { id: 4, name: "Maryam", age: 17, email: "maryam@mail.com" },
  { id: 5, name: "Abdurrahman", age: 17, email: "abdurrahman@mail.com" },
];

const adults = users.filter((user) => user.age >= 18);
