/**
 * https://www.nowcoder.com/practice/20ef0972485e41019e39543e8e895b7f
 * NC61 两数之和
 * @param numbers int整型一维数组
 * @param target int整型
 * @return int整型一维数组
 */
export function twoSum(numbers: number[], target: number): number[] {
  let map = {};
  for (let i = 0; i < numbers.length; i++) {
    let cur = numbers[i];

    let old = map[cur];
    if (old !== undefined) {
      if (cur + cur == target) {
        return [old + 1, i + 1];
      }
      continue;
    }
    map[cur] = i;
  }

  for (let i = 0; i < numbers.length; i++) {
    let cur = numbers[i];
    let rest = target - cur;
    let rest_index = map[rest];

    if (rest_index !== undefined && rest_index !== i) {
      return [i + 1, rest_index + 1];
    }
  }

  return [];
}
