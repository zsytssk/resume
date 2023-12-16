/** https://www.nowcoder.com/practice/eceb50e041ec40bd93240b8b3b62d221
 *  NC175 合法的括号字符串
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return bool布尔型
 */
export function isValidString(s: string): boolean {
  let [isValid, _] = testStr(s);

  return isValid;
}

function testStr(s: string, start = 0, needMatch = false) {
  let arr: boolean[] = [];
  let endIndex = start;
  for (let i = start; i < s.length; i++) {
    endIndex = i;
    let char = s[i];
    if (char === "(") {
      let [isMatch, index] = testStr(s, i + 1, true);
      arr.push(isMatch);
      i = index;
      continue;
    }
    if (char === ")") {
      arr.push(needMatch);
      break;
    }
    if (char === "*") {
      let sub = checkBranch(s, i + 1, needMatch);
      // 这个地方“）”怎么break
      arr.push();
      break;
    }
  }

  const isValid = arr.findIndex(Boolean) !== -1;

  return [isValid, endIndex] as const;
}

function checkBranch(s: string, i: number, needMatch = false) {
  let arr: boolean[] = [];

  {
    let [isMatch, index] = testStr(s, i, true);
    arr.push(isMatch);
    i = index;
  }
  {
    arr.push(needMatch);
  }

  return arr;
}
