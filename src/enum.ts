export {};

enum Months {
  January = 1, // デフォルトは0
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January); // 1
console.log(Months.February); // 2
console.log(Months.December); // 12

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log(green);

enum COLORS {
  YELLOW = '#FFFF00', // 後から足せる
  // GRAY, // 列挙型メンバーには初期化子が必要です。
}

COLORS.YELLOW;
