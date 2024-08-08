// 那一种情况没有考虑到
// 有没有continue的情况
// 有没有可能分配的内存大于他本身的空间 -> 这不是难为人吗 -> ?
// 会不会是哪里报错? -> 不是
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

  for (let i = 0; i < list.length; i++) {
    const [curPos, useSpace] = list[i];

    let nextPos = 100;
    if (i < list.length - 1) {
      nextPos = list[i + 1][0];
    }

    const emptySpace = nextPos - curPos - (useSpace || 0);
    if (emptySpace >= needSpace) {
      targetPos = curPos + useSpace;
      break;
    }
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
