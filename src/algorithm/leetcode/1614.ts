/** https://leetcode.cn/problems/maximum-nesting-depth-of-the-parentheses/
 * 1614. 括号的最大嵌套深度
 */

function maxDepth(s: string): number {
  let deepInfo = depth(s);
  return deepInfo[0];
}

function depth(s: string, start = 0): [number, number] {
  let arr: number[] = [];
  let endIndex = start;
  for (let i = start; i < s.length; i++) {
    let char = s[i];
    endIndex = i;
    if (char === "(") {
      let [level, index] = depth(s, i + 1);
      arr.push(level + 1);
      i = index;
      continue;
    }
    if (char === ")") {
      arr.push(0);
      break;
    }
  }
  let max = 0;
  if (arr.length) {
    max = Math.max(...arr);
  }
  return [max, endIndex];
}

console.log(depth("()(()(()))"));
