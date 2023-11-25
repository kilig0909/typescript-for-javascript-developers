export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile; // type PropertyTypes = "name" | "age"

type Optional<Type> = {
  [Property in keyof Type]?: Type[Property] | null;
};
type OptionalProfile = Optional<Profile>;
// type OptionalProfile = {
//   name?: string | null | undefined;
//   age?: number | null | undefined;
// }
