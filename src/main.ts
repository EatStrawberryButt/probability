const baseTwo = (rate: number) => {
  if (rate > 1) return true;
  if (rate < 0) return false;
  const random = Math.random();
  return random - rate <= 0;
};
const baseMore = (...rate: number[]): number => {
  let total: number = 0;
  const randomNum = Math.random();

  for (let i = 0; i < rate.length; i++) {
    total += rate[i];
    if (randomNum <= total) return i;
  }
  return rate.length;
};

export { baseTwo, baseMore };
export default {
  baseTwo,
  baseMore,
};
