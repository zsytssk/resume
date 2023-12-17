/** https://www.nowcoder.com/practice/eceb50e041ec40bd93240b8b3b62d221
 *  NC175 合法的括号字符串
 * @param s string字符串
 * @return bool布尔型
 */
export function isValidString(s: string): boolean {
  let matchNum = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(") {
      matchNum++;
      continue;
    }
    if (char === ")") {
      matchNum--;
      if (matchNum < 0) {
        return false;
      }
    }
  }

  return matchNum == 0;
}

console.log(`test:>`, isValidString("(*)"));
