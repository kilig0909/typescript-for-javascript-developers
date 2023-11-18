export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public profile() {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);

console.log(taro); // Person { name: 'Taro', age: 30 }
console.log(taro.profile()); // name: Taro, age: 30
