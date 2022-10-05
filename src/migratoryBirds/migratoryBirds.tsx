/** any */
export function migratoryBirds(arr: number[]): number {
  // Write your code here
  let max: number = 0;
  let maxId: number = 6;
  const store = new Array(6).fill(0);
  for (const num of arr) {
    store[num]++;
    if (store[num] > max) {
      max = store[num];
      maxId = num;
    } else if (store[num] === max && num < maxId) {
      maxId = num;
    }
  }
  return maxId;
}
