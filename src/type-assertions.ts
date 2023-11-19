export {};

let name: any = 'Minako';

// let length = name.length as number;
let length = (name as string).length; // より早い段階で型アサーションする
// let length = (<string>name).length; // 別の書き方。非推奨

// length = 'foo'; // NG
