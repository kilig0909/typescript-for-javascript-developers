export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('月野うさぎ', 14);
console.log(me);
