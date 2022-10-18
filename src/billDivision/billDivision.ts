/** any */
export function billDivision(bill: number[], k: number, b: number): void {
  let count: number = 0;
  for (let i = 0; i < bill.length; i++) {
    count += bill[i];
  }

  const costOfConsumedItems = count - bill[k];
  const isOverCharged = b - costOfConsumedItems / 2;
  if (!isOverCharged) {
    console.log('Bon Appetit');
  } else {
    console.log(isOverCharged);
  }
}
