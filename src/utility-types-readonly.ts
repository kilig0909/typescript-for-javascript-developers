export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Minako',
  age: 14,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Usagi',
  age: 14,
};

// friend.age++; // NG

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
