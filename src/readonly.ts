export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('月野うさぎ');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ちびうさ'; // NG
