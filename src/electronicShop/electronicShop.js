/** any */
export function electronicShop(keyboards, drives, b) {
  let max = 0;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        if (max < keyboards[i] + drives[j]) {
          max = keyboards[i] + drives[j];
        }
      }
    }
  }

  if (max === 0) {
    return -1;
  }
  return max;
}
