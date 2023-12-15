/**
 * https://www.nowcoder.com/practice/3245215fffb84b7b81285493eae92ff0
 * 明明的随机数 == 去掉重复再排列
 * @param input
 * @returns
 */
export function parseInput(input: string[]) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    let cur = input[i];
    map[cur] = i;
  }
  let result: number[] = [];
  for (let key in map) {
    result.push(parseInt(key));
  }
  result.sort((a, b) => a - b);
  return result;
}
