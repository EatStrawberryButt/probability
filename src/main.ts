const base = (rate: number) => {
  if (rate > 1) return true;
  if (rate < 0) return false;
  const random = Math.random();
  return random - rate <= 0;
};

export { base };
export default base;
