export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Minako', underTwenty: true };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'Minako';
profile.age = 14;
profile.nationality = 'Japan';
