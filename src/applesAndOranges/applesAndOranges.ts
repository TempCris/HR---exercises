/** any */
export function applesAndOranges(
  start: number,
  finish: number,
  appleTree: number,
  orangetree: number,
  apples: number[],
  oranges: number[]
): void {
  let apple = 0;
  let orange = 0;

  apples.forEach((element) => {
    if (appleTree + element >= start && appleTree + element <= finish) {
      apple++;
    }
  });

  oranges.forEach((element) => {
    const res = orangetree + element;
    if (res >= start && res <= finish) {
      orange++;
    }
  });
  console.log(apple);
  console.log(orange);
}
