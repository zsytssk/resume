// https://www.nowcoder.com/practice/6a7b2b6c9e3a4f56b1db9f8ca08d889b
// 小红取数
export function parseInput(input: string[]) {
  const [num, rate] = input[0].split(" ").map(Number);
  const list = input[1].split(" ").map(Number);
  let arr: number[] = [];
  for (let i = 0; i < num; i++) {
    let cur = list[i];
    const newArr = [cur, ...arr.map((item) => item + cur)];
    arr.push(...newArr);
  }
  arr = arr.filter((item) => item % rate === 0);
  if (!arr.length) {
    return -1;
  }

  return Math.max(...arr);
}

console.log(
  parseInput(
    `5 5
4 8 2 9 1`.split("\n")
  )
);
