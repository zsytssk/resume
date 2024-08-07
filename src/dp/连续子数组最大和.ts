// https://www.nowcoder.com/practice/03d341fb6c9d42debcdd38d82a0a545c

export function parseInput(input: string[]) {
  const list = input.slice(1).map(Number);
  const sumList: number[] = [];
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    let cur = Math.max((sumList[i - 1] || 0) + item, item);
    sumList.push(cur);
  }
  return Math.max(...sumList);
}

console.log(
  parseInput(
    `8
  1
  -2
  3
  10
  -4
  7
  2
  -5`.split("\n")
  )
);
