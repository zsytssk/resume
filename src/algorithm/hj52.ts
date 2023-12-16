/** https://www.nowcoder.com/practice/37548e94a270412c8b9fb85643c8ccc2
 * NC52 有效括号序列
 */
const map = {
  "(": ")",
  "{": "}",
  "[": "]",
};

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return bool布尔型
 */
export function isValid(s: string): boolean {
  const [match, _] = findMatch(s, 0, "");
  return match;
}

export function findMatch(s: string, start: number, matchStr: string) {
  for (let i = start; i < s.length; i++) {
    let char = s[i];
    if (map[char]) {
      let [match, newIndex] = findMatch(s, i + 1, map[char]);
      if (!match) {
        return [false, newIndex];
      }
      i = newIndex;
      continue;
    }

    if (char === matchStr) {
      return [true, i];
    }
    return [false, i];
  }

  if (matchStr) {
    return [false, s.length];
  }

  return [true, s.length];
}

console.log(isValid("[()]"));
