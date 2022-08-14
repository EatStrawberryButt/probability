import { values, keys } from "lodash-es";

type BaseObject = { [key in string]: number };

/**
 * @return boolean
 */
const baseTwo = (rate: number) => {
  if (rate > 1) return true;
  if (rate < 0) return false;
  const random = Math.random();
  return random - rate <= 0;
};

/**
 * @return index number
 */
const baseMore = (...rate: number[]): number => {
  let total: number = 0;
  const randomNum = Math.random();

  for (let i = 0; i < rate.length; i++) {
    total += rate[i];
    if (randomNum <= total) return i;
  }
  return rate.length;
};

const baseObject = (baseObject: BaseObject): string | undefined => {
  const index = baseMore(...values(baseObject));
  return keys(baseObject)[index];
};

export { baseTwo, baseMore, baseObject };
export default {
  baseTwo,
  baseMore,
  baseObject,
};
