import './training';

function sum(a: number, b: number): number {
    return a + b;
}   

type UploadStatus = 'loading' | 'success' | 'error' ;
let uploadStatus: UploadStatus = 'error';

type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';  
let textFormat: TextFormat = 'uppercase';

interface User {
    name: string;
    age: number;
    email?: string;
}

interface Admin extends User {
    role: 'admin';
    permissions: string[];
}

function formatText(text: string, format: TextFormat): string {
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

function removeChar(str: string, charToRemove: string): string {
    return str.replaceAll(charToRemove, '');
}

const user: User[] = [
    { id: 1, name: 'Леонель', isActive: true, age: 30 },
    { id: 2, name: 'Рафаэль', isActive: false, age: 25 },
    { id: 3, name: 'Донателло', isActive: true, age: 30 },
];

const activeUsers: User[] = users.filter((user) => user.isActive);

console.log('3. Сумма:', sum(5, 10));
console.log('4. Статус:', uploadStatus);
console.log('5. Формат:', textFormat);
console.log('8. Форматирование:', formatText('пРиВеТ мИр', 'capitalize'));
console.log('9. Без символа:', removeChar('TypeScript', 't'));
console.log('10. Активные юзеры:', activeUsers);