/** any */
export function SubarrayDivision(array: number[], days: number, months: number) {
  let matches: number = 0;
  for (let i = 0; i < array.length; i++) {
    const subArray = array.slice(i, i + months);
    const sum = subArray.reduce((prev, curr) => prev + curr);
    if (sum === days) {
      matches++;
    }
  }
  return matches;
}
