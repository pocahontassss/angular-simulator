// Задание №3: Создаю функцию, которая принимает два числа и возвращает их сумму.

function summation(a: number, b: number): number {
    return a + b;
}

console.log(summation(48, 1986));

// Задание №4: Создаю переменную, которая  которая может быть только: "loading", "success", "error".
export {};

let status: 'loading' | 'success' | 'error' = 'loading';

// Задание №5: Создаю переменную, которая может быть только: "uppercase", "lowercase", "capitalize".

let textFormat: 'uppercase' | 'lowercase' | 'capitalize' = 'lowercase';

//Задание №6: Создаю интерфейс, который описывает юзера. Одно поле опциональное.

interface IUser {
    name: string;
    surname: string;
    patronymic?: string;
    birthDate: Date;
    age: number;
    gender: 'male' | 'female';
    email: string;
}

console.log({
    name: 'Adel',
    surname: 'Bikkenin',
    patronymic: 'Ramilevich',
    birthDate: new Date('1986-04-11'),
    age: 40,
    gender: 'male',
    email: 'adel@gmail.com'
});

// Задание №7: Создаю интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля.

interface client extends IUser {
    cars: {
        brand: string;
        model: string;
        year: number;
        vin: string;
    }[];
    discountLevel: number;
    dateRegistration: Date;
}

console.log({
    name: 'Adel',
    surname: 'Bikkenin',
    patronymic: 'Ramilevich',
    birthDate: new Date('1986-04-11'),
    age: 40,
    gender: 'male',
    email: 'adel@gmail.com',
    cars: [
        {
            brand: 'Mitsubishi',
            model: 'Lancer',
            year: 2007,
            vin: 'jmbsncy2a8u007915'
        }
    ],
    discountLevel: 5,
    dateRegistration: new Date('2023-01-01')
});

// Задание №8: Создаю функцию, которая принимает строку и вариант, 
// и на основе этого возвращает форматированную строку.

function textFormatter(text: string, format: typeof textFormat): string {
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

console.log(textFormatter('angular simulator', 'capitalize'));

// Задание №9: Создаю функцию, которая принимает строку и символ,
// возвращает строку без переданного символа.

function symbolDeleting(text: string, symbol: string): string {
    return text.replaceAll(symbol, '');
}

console.log(symbolDeleting('Angular Simulator', 'u'));

// Задание №10: Создаю массив объектов на основе интерфейса с задания №6.
// Отфильтроввываю его по одному из параметров.

const users: IUser[] = [
    {
        name: 'Adel',
        surname: 'Bikkenin',
        patronymic: 'Ramilevich',
        birthDate: new Date('1986-04-11'),
        age: 40,
        gender: 'male',
        email: 'adel@gmail.com'
    },
    {
        name: 'Maximilien',
        surname: 'Robespierre',
        birthDate: new Date('1794-07-28'),
        age: 231,
        gender: 'male',
        email: 'maximilien@gmail.com'
    },
    {
        name: 'Marat',
        surname: 'Jean-Paul',
        birthDate: new Date('1743-05-24'),
        age: 283,
        gender: 'male',
        email: 'marat@gmail.com'
    },
    {
        name: 'Nadezhda',
        surname: 'Krupskaya',
        patronymic: 'Konstantinovna',
        birthDate: new Date('1869-02-26'),
        age: 157,
        gender: 'female',
        email: 'nadezhda@gmail.com'
    }
];

const mens = users.filter(user => user.gender === 'male');

console.log(mens);