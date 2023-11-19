export {};

let name = 'Minako';
name = 'SailorVenus';

let nickname = 'Mina' as const;
// nickname = 'MinaP'; // NG
nickname = 'Mina'; // OK

let profile = {
  name: 'Minako',
  height: 158,
} as const;

// profile.name = 'MinaP'; // NG
// profile.height = 160; // NG
