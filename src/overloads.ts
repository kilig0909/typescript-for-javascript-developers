export {};

// シグネチャ
function double(value: number): number;
function double(value: string): string;

// 関数の実態
// 引数の型制約はシグネチャで定義されているためanyでも型安全になる
function double(value: any): any {
  if (typeof value === 'number') return value * 2;
  else return value + value;
}

console.log(double(100)); // 200
console.log(double('Go')); // GoGo
// console.log(double(true)); // コンパイルエラー
