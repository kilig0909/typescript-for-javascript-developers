export {};

let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1976 }; // 怒られない

let profile2: {
  name: string;
} = { name: 'Ham' };
// profile2 = { birthYear: 1976 }; // 怒られる
profile2 = { name: 'Nimo' };
