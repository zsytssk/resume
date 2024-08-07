// https://www.nowcoder.com/practice/a2be806a0e5747a088670f5dc62cfa1e

export function parseInput(input: string[]) {
  const list = input[1].split(" ").map(Number);
  const sumList: [number, number][] = [];
  for (let i = 0; i < list.length; i++) {
    let preSum1 = sumList[i - 1]?.[0] || 0;
    let preSum2 = sumList[i - 1]?.[1] || 0;
    let item = list[i];
    let cur0 = Math.max(preSum1, preSum2);
    let cur1 = Math.max(preSum1 + item, item);
    sumList.push([cur0, cur1]);
  }
  // console.log(`test:>`, sumList);
  return Math.max(...sumList.map((item) => item[0]));
}

console.log(
  parseInput(
    `4
2 6 4 1`.split("\n")
  )
);
