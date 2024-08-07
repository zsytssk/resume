// https://www.nowcoder.com/practice/a2be806a0e5747a088670f5dc62cfa1e

export function parseInput(input: string[]) {
  const list = input[1].split(" ").map(Number);
  const sumList: number[] = [];
  for (let i = 0; i < list.length; i++) {
    let preSum1 = sumList[i - 2] || 0;
    let preSum2 = sumList[i - 3] || 0;
    let item = list[i];
    let cur = Math.max(preSum1 + item, preSum2 + item, item);
    sumList.push(cur);
  }
  // console.log(`test:>`, sumList);
  return Math.max(...sumList);
}
