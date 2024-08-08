// 如何鉴定是否是空位
// 如何处理不相连的空位
// 有没有特殊情况 -> 一个个的位置去计算
export function parseInput(input: string[]) {
  const posStr = input[0];
  let seatedMap = {};
  let canSeatMap = {};
  for (let i = 0; i < posStr.length; i++) {
    const char = posStr[i];
    if (char == "1") {
      seatedMap[i] = 1;
      continue;
    }
  }
  for (let i = 0; i < posStr.length; i++) {
    const char = posStr[i];
    if (char == "1") {
      continue;
    }
    if (!seatedMap[i - 1] && !seatedMap[i + 1] && !canSeatMap[i - 1]) {
      canSeatMap[i] = 1;
    }
  }

  return Object.keys(canSeatMap).length;
}

console.log(`test:>`, parseInput(`10001`.split("\n")));
