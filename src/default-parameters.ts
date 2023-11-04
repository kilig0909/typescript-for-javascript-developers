export {};

const nextYearSalary = (
  currentYearSalary: number,
  rate: number = 1.1
): number => {
  return currentYearSalary * rate;
};

console.log(nextYearSalary(1000));
