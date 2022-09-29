/** any */
export function divisibleSumPairs(n: number, k: number, arr: number[]) {
  let count: number = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((arr[i] + arr[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}
