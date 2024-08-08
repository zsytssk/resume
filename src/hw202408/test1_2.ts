// 那一种情况没有考虑到
// 有没有continue的情况
// 有没有可能分配的内存大于他本身的空间 -> 这不是难为人吗 -> ?
// 会不会是哪里报错?
export function parseInput(input: string[]) {
  const needSpace = Number(input[0]);
  const list = input.slice(1).map((item) => item.split(" ").map(Number));

  let targetPos = -1;
  if (needSpace < 0 || needSpace > 100) {
    return -1;
  }
  if (!list.length) {
    if (needSpace <= 100) {
      targetPos = 0;
    }
    return targetPos;
  }
  if (!list[100][1]) {
  }
  return targetPos;
}

console.log(
  `test:>`,
  parseInput(
    `1
0 0
3 2`.split("\n")
  )
);
