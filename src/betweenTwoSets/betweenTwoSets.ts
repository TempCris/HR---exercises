/** any */
export function betweenTwoSets(a: number[], b: number[]): number {
  let ii = 0;
  let count = 0;
  let min = 0;

  a.forEach((val) => {
    if (val > min) {
      min = val;
    }
  });
  let max = 100;

  b.forEach((val) => {
    if (val < max) {
      max = val;
    }
  });

  for (let i = min; i <= max; i++) {
    let res = true;
    for (ii = 0; ii < a.length; ii++) {
      if (i % a[ii] !== 0) {
        res = false;
      }
    }
    if (res) {
      for (ii = 0; ii < b.length; ii++) {
        if (b[ii] % i !== 0) {
          res = false;
        }
      }
    }
    if (res) {
      count++;
    }
  }
  return count;
}
