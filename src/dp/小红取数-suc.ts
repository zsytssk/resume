// https://www.nowcoder.com/practice/fd55637d3f24484e96dad9e992d3f62e?tab=note
// 【模板】01背包
export function parseInput(input: string[]) {
  const [num, rate] = input[0].split(" ").map(Number);
  const list = input[1].split(" ").map(Number);
  const dp = new Array(num + 1)
    .fill(-Number.MAX_SAFE_INTEGER)
    .map(() => new Array(rate).fill(-Number.MAX_SAFE_INTEGER));
  dp[0][0] = 0;

  for (let i = 1; i <= num; i++) {
    let v = list[i - 1];
    for (let j = 0; j < rate; j++) {
      dp[i][(j + v) % rate] = Math.max(
        dp[i - 1][j] + v,
        dp[i - 1][(j + v) % rate]
      );
    }
  }
  if (dp[num][0] <= 0) {
    return -1;
  }

  return dp[num][0];
}

console.log(
  parseInput(
    `5 5
4 8 2 9 1`.split("\n")
  )
);
