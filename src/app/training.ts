interface IUser {
  name: string;
  age: number;
  email?: string;
  car?: string;
}

interface IEmployee extends IUser {
  salary: number;
  position: string;
}

let status: "loading" | "success" | "error" = "loading";
let textFormat: "uppercase" | "lowercase" | "capitalize" = "uppercase";
let users: IUser[] = [
  {name: "Эльдар", age: 20},
  {name: "Мухаммад", age: 19},
];
let adults = users.filter((user) => user.age >= 18)

function sum (a: number, b: number): number {                                                                                          
    return a + b;                                                                                            
  }

sum (15, 10)

function formatText(text: string, format: "uppercase" | "lowercase" | "capitalize"): string {
if (format === "uppercase" ) {
  return text.toUpperCase()
} else if (format === "lowercase") {
  return text.toLowerCase()
} else {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
};

function removeChar(text: string, char: string): string {
  return text.replaceAll(char, "")
}








export{}