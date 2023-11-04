export {};

type Picher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAvarage: number;
};

const DaimajinSasaki: Picher1 = {
  throwingSpeed: 154,
};

const ochiaiHiromitsu: Batter1 = {
  // throwingSpeed: 154,
  battingAvarage: 0.367,
};

// type TwowayPlayer = {
//   throwingSpeed: number;
//   battingAvarage: number;
// };

type TwowayPlayer = Picher1 & Batter1;

const otaniShohei: TwowayPlayer = {
  throwingSpeed: 165,
  battingAvarage: 0.286,
};
