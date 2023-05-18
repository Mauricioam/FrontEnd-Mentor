const multipleOfFour = (diff) => {
  if (diff % 4 === 0) return true;
  else return false;
};
const getDirfference = (year1, year2) => year2 - year1;
export const isLeapYear = (year) => {
  const referenceYear = 2012;
  let difference;
  if (year === referenceYear) return true;
  if (year < referenceYear) {
    difference = getDirfference(year, referenceYear);
    return multipleOfFour(difference);
  } else {
    difference = getDirfference(referenceYear, year);
    return multipleOfFour(difference);
  }
};
