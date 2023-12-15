/**
 * https://www.nowcoder.com/practice/5af18ba2eb45443aa91a11e848aa6723
 * HJ14 字符串排序
 * @param input
 * @returns
 */

export function parseInput(input: string[]) {
  let arr = input.splice(1, input.length);
  return arr
    .sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a === b) {
        return 0;
      }
      return -1;
    })
    .join("\n");
}
