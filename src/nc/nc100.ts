/**
 * https://www.nowcoder.com/practice/d11471c3bf2d40f38b66bb12785df47f
 * NC100 把字符串转换成整数(atoi)
 */
let MIN_NUM = -Math.pow(2, 31);
let MAX_NUM = Math.pow(2, 31) - 1;

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return int整型
 */
export function StrToInt(s: string): number {
  let num = localParseInt(s);
  if (num !== num) {
    return 0;
  }
  if (num > MAX_NUM) {
    return MAX_NUM;
  }
  if (num < MIN_NUM) {
    return MIN_NUM;
  }
  return num;
}

function localParseInt(s: string) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === " " && !res) {
      continue;
    }
    if ("-+0123456789".indexOf(char) !== -1) {
      res += char;
      continue;
    }
    break;
  }
  return parseInt(res);
}
