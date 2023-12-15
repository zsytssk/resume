/**
 * https://www.nowcoder.com/practice/05182d328eb848dda7fdd5e029a56da9
 * HJ23 删除字符串中出现次数最少的字符
 */

export function parseInput(input: string) {
  let map = {};
  let minVal = 0;
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let num = 0;
    if (map.hasOwnProperty(char)) {
      num = map[char];
    }
    let newNum = num + 1;
    map[char] = newNum;
    minVal = newNum;
  }

  for (const key in map) {
    if (map[key] < minVal) {
      minVal = map[key];
    }
  }

  let result = "";
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (map[char] == minVal) {
      continue;
    }
    result += char;
  }

  return result;
}
