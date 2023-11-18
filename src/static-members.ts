export {};

class Me {
  static readonly isProgrammer: boolean = true;
  static firstName: string = 'Ami';
  static lastName: string = 'Mizuno';

  static work() {
    //     "Hey, guys! This is Ami! Are you interested in TypeScript? Let's dive into TypeScript!"
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

let me = new Me();
// console.log(me.isProgrammer); // NG

console.log(Me.isProgrammer);
console.log(Me.work());

// Me.isProgrammer = false; // NG
