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

const baseObject = <T extends BaseObject>(baseObject: T): keyof T | undefined => {
  const index = baseMore(...values(baseObject));
  return keys(baseObject)[index];
};

let list = { a: 0, b: 0, undefined: 0 };

const probability = {
  a: 0.2,
  b: 0.3,
};
for (let i = 0; i < 1000; i++) {
  list[`${baseObject<typeof probability>(probability)}`]++;
}
console.log(list);

export { baseTwo, baseMore, baseObject };
export default {
  baseTwo,
  baseMore,
  baseObject,
};
