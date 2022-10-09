/** any */
export function dayOfProgrammer(year: number): string {
  const remain = year % 4;
  const julian = 1917;
  if (year < julian) {
    if (remain === 0) {
      return `12.09.${year}`;
    }
    return `13.09.${year}`;
  }
  if (year === 1918) {
    return `26.06${year}`;
  }

  if (year % 400 === 0 || (remain === 0 && year % 100 !== 0)) {
    return `12.09.${year}`;
  }
  return `13.09${year}`;
}
