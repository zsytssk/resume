/**
 * https://www.nowcoder.com/practice/bb1615c381cc4237919d1aa448083bcc
 * NC149 kmp算法
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 计算模板串S在文本串T中出现了多少次
 * @param S string字符串 模板串
 * @param T string字符串 文本串
 * @return int整型
 */
export function kmp(S: string, T: string): number {
  let num = 0;
  for (let i = 0; i < T.length; i++) {
    let subStr = T.slice(i, T.length);
    if (subStr.startsWith(S)) {
      num++;
    }
  }
  return num;
}
