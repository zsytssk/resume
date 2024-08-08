// https://www.nowcoder.com/practice/fd55637d3f24484e96dad9e992d3f62e?tab=note
// 背包
// 抄来的答案, 无法理解
export function parseInput(input: string[]) {
  const [num, v] = input[0].split(" ").map(Number);
  const list = input.slice(1).map((item) => item.split(" ").map(Number)) as [
    number,
    number
  ][];
  list.unshift([0, 0]);

  const maxSize = doFn(num, v, list);
  let maxSizeWhenFull = doFullFn(num, v, list);

  return [maxSize, maxSizeWhenFull].join("\n");
}

function doFn(n, v, list) {
  // dp[i][j]  [0,i]物品，任取放入体积为j的背包中，对应的最大价值
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(v + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    let item = list[i];
    for (let j = 1; j <= v; j++) {
      if (j < item[0]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - item[0]] + item[1]);
      }
    }
  }

  return dp[n][v];
}

function doFullFn(n, v, list) {
  // dp[i] 背包体积为i时，对应的最大价值
  const dp = Array(v + 1).fill(-Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    let item = list[i];
    for (let j = v; j >= item[0]; j--) {
      dp[j] = Math.max(dp[j], dp[j - item[0]] + item[1]);
    }
  }

  const max = dp[v] > 0 ? dp[v] : 0;

  return max;
}

console.log(
  parseInput(
    `3 8
12 6
11 8
6 8`.split("\n")
  )
);
