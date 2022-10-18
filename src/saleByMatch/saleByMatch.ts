/** any */
export function saleByMatch(n: number, ar: number[]): number {
  let pares: number = 0;
  const socks: number[] = [{}];

  for (let i = 0; i < ar.length; i++) {
    socks[ar[i]] ? (socks[ar[i]] += 1) : (socks[ar[i]] = 1);
    if (socks[ar[i]] % 2 === 0) {
      pares++;
    }
  }
  return pares;
}
