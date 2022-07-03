
// Union type
type Style = 'bold' | 'italic' | 23;
let font: Style;

font = 'bold';

// Interfaces
interface Person {
    first: string;
    last: string;
    [key: string]: any // Allows unlimited additional properties
}

const person2: Person = {
    first: 'Usain',
    last: 'Bold',
    fast: true,
}

// Functions
function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
}

// Arrays
const arr: number[] = [];
arr.push(1);
// arr.push('12');  // Error
// arr.push(false); // Error

// Array of objects
const people: Person[] = [];
people.push({
    first: 'Larry',
    last: 'Kagan'
});

// Tuples
type MyTuple = [number, string, boolean];
const myArr: MyTuple = [1, '12', false];

type MyOptionalList = [number?, string?, boolean?];
const myOptionalArr: MyOptionalList = [];
