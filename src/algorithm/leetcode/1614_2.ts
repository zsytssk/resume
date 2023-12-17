/** https://leetcode.cn/problems/maximum-nesting-depth-of-the-parentheses/
 * 1614. 括号的最大嵌套深度
 */

export function maxDepth(s: string): number {
  let depth = 0;
  let matchNum = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(") {
      matchNum++;
      continue;
    }
    if (char === ")") {
      if (depth < matchNum) {
        depth = matchNum;
      }
      matchNum--;
      if (matchNum < 0) {
      }
    }
  }

  return depth;
}

console.log(maxDepth("()(()(()))"));
