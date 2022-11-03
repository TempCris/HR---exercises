/** any */
export function countingValleys(steps: number, path: string): number {
  // Write your code here
  let valleys: number = 0;
  let elevation: number = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'D') {
      elevation--;
    } else {
      if (elevation === -1) {
        valleys++;
      }
      elevation++;
    }
  }
  return valleys;
}
