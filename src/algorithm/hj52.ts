/** https://www.nowcoder.com/practice/37548e94a270412c8b9fb85643c8ccc2
 * NC52 有效括号序列
 * @param s string字符串
 * @return bool布尔型
 */
export function isValid(s: string): boolean {
  let saveArr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char]) {
      saveArr.push(char);
      continue;
    }
    let last = saveArr.pop() as string;
    if (char !== map[last]) {
      return false;
    }
  }

  return saveArr.length === 0;
}
const map = {
  "(": ")",
  "{": "}",
  "[": "]",
};

console.log(isValid("[()]"));
