function sum(a: number, b: number): number {
  return a + b;
}
type UploadStatus = "loading" | "success" | "error";

let uploadStatus: UploadStatus = "loading";

type TextFormat = "uppercase" | "lowercase" | "capitalize";

let textFormat = "uppercase";

function formatText(text: string, formatType: TextFormat): string {
  if (formatType === "uppercase") {
    return text.toUpperCase();
  } else if (formatType === "lowercase") {
    return text.toLowerCase();
  } else {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
}
console.log(formatText("привет мир", "uppercase"));
console.log(formatText("ПРИВЕТ МИР", "lowercase"));
console.log(formatText("привет мир", "capitalize"));

function showStatus(uploadStatus: UploadStatus) {}
function printTextFormat() {
  let text: TextFormat = "uppercase";
}
interface IUser {
  name: string;
  age: number;
  email?: string;
  color?: string;
}
const user: IUser = {
  name: "Musya",
  age: 3,
  color: "dark-gray",
};
interface Admin extends IUser {
  parent: boolean;
}
const admin: Admin = {
  name: "Admin",
  age: 10,
  parent: true,
};

function removeChar(str: string, char: string): string {
  return str.split(char).join("");
}

console.log(removeChar("привет мир", "р"));

const users: IUser[] = [
  { name: "Musya", age: 3, color: "dark-gray" },
  { name: "Lenka", age: 9, color: "orange", email: "lena@example.com" },
  { name: "Pushok", age: 15, color: "white" },
];

const olderThanTen = users.filter((u) => u.age > 10);

console.log(olderThanTen);
