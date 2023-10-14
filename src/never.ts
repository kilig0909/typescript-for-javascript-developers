export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result }); // 出力なし。ここまで届かないので
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('only me!');
