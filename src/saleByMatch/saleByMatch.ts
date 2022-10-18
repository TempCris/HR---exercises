/** any */
export function saleByMatch(n: number, ar: number[]): number {
  let pares = n * 0;

  ar.sort();
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i + 1]) {
      pares++;
      i++;
    }
  }
  return pares;
}
