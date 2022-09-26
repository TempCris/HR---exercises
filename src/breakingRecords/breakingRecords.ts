/** any */
export function breakingRecords(scores: number[]) {
  let highValue: number = scores[0];
  let lowValue: number = scores[0];
  const values: number[] = [0, 0];

  for (let i = 1; i < scores.length; i++) {
    // highest scores
    if (highValue < scores[i]) {
      highValue = scores[i];
      values[0]++;
    }
    // lowest scores
    if (lowValue > scores[i]) {
      lowValue = scores[i];
      values[1]++;
    }
  }
  return values;
}
