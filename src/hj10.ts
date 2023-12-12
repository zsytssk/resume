/**
 * https://www.nowcoder.com/practice/eb94f6a5b2ba49c6ac72d40b5ce95f50
 * 字符个数统计
 */
export function parseNum(input: string[]) {
  const map = {};
  for (let item of input) {
    map[item] = 0;
  }
  return Object.keys(map).length;
}
