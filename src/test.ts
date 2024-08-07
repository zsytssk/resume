// https://www.nowcoder.com/practice/6a7b2b6c9e3a4f56b1db9f8ca08d889b
// 小红取数
// 卡住了
export function parseInput(input: string[]) {
  const [num, v] = input[0].split(" ").map(Number);
  const list = input.slice(1).map((item) => item.split(" ").map(Number)) as [
    number,
    number
  ][];

  let arr: [number, number][] = [];
  for (let i = 0; i < num; i++) {
    let [vi, wi] = list[i];
    const newArr = [
      [vi, wi],
      ...arr.map((item) => [item[0] + vi, item[1] + wi]),
    ].filter((item) => item[0] <= v) as [number, number][];
    arr.push(...newArr);
  }

  const maxSize = Math.max(...arr.map((item) => item[1]));
  const fullArr = arr.filter((item) => item[0] == v).map((item) => item[1]);
  let maxSizeWhenFull = 0;
  if (fullArr.length) {
    maxSizeWhenFull = Math.max(...fullArr);
  }

  return [maxSize, maxSizeWhenFull].join("\n");
}

console.log(
  parseInput(
    `3 8
12 6
11 8
6 8`.split("\n")
  )
);
