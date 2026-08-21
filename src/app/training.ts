interface IUser {
  name: string;
  height: number;
  weight: number;
  married?: boolean;
}

interface IMan extends IUser {
  favoriteGame: string;
  mmr: number;
}

let uploadStatus: "loading" | "success" | "error" = "loading";
let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

const users: IUser[] = [
  {
    name: 'Боярский',
    height: 181,
    weight: 77
  },
  {
    name: 'Газманов',
    height: 180,
    weight: 76
  },
  {
    name: 'Безруков',
    height: 179,
    weight: 75
  },
]

const legend: IUser[] = users.filter((user: IUser) => user.height === 179);

function formatText(text: string, textFormat: string): string {
  if (textFormat === 'uppercase') {
    return text.toUpperCase();
  } else if (textFormat === 'lowercase') {
    return text.toLowerCase()
  } else if (textFormat === 'capitalize') {
     return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
  return text;
}

function sum(a: number, b: number): number {
  return a + b;
}

function removeSymbol(text: string, symbol: string): string {
  return text.replaceAll(symbol, "");
}

