/** any */
export function pageCount(n: number, p: number): number {
  // Write your code here
  const frontCount = Math.floor(p / 2);
  let backCount = 0;
  if (n % 2 === 1) {
    backCount = Math.floor((n - p) / 2);
  } else {
    backCount = Math.floor((n - p + 1) / 2);
  }
  return Math.min(frontCount, backCount);
}
