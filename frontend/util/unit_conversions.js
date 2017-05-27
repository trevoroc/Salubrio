export const secToMin = sec => sec / 60;

export const mToFt = meters => meters * 3.28084;

export const roundToNearestN = (value, places) => {
  const roundFactor = Math.pow(10, places);
  return Math.round(value * roundFactor) / roundFactor;
};
