export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); // undefined

fooCompatible = barCompatible;

console.log(typeof fooCompatible); // string

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible; // NG

let fooString: string;
let barString: string = 'string';

fooString = barString; // OK

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral; // OK

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral; // OK

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'はむさん');
