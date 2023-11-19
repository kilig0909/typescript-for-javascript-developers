export {};

let profile: { name: string; age: number | null } = {
  name: 'Minako',
  age: null, // tsconfig.json -> strictNullChecks: false にすればOKだがダメ
};
