// https://www.nowcoder.com/practice/9740ce2df0a04399a5ade1927d34c1e1
// 字母收集

const charScore = { l: 4, o: 3, v: 2, e: 1 };
export function parseInput(input: string[]) {
  const mapSize = input[0].split(" ").map(Number);
  const map = input.slice(1).map((item) => item.split(""));
  const scoreList: number[][] = [];
  for (let i = 0; i < mapSize[0]; i++) {
    if (!scoreList[i]) {
      scoreList[i] = [];
    }
    for (let j = 0; j < mapSize[1]; j++) {
      const curChar = map[i][j];
      const curVal = charScore[curChar] || 0;
      const topScore = scoreList[i - 1]?.[j] || 0;
      const leftScore = scoreList[i]?.[j - 1] || 0;
      const curScore = Math.max(topScore, leftScore) + curVal;
      scoreList[i][j] = curScore;
    }
  }

  return scoreList[mapSize[0] - 1][mapSize[1] - 1];
}

console.log(
  parseInput(
    `2 3
lle
ove`.split("\n")
  )
);
