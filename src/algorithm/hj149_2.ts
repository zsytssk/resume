/**
 * https://www.nowcoder.com/practice/bb1615c381cc4237919d1aa448083bcc
 * NC149 kmp算法
 * 计算模板串S在文本串T中出现了多少次
 * @param S string字符串 模板串
 * @param T string字符串 文本串
 * @return int整型
 */
export function kmp(S: string, T: string): number {
  let num = 0;
  let sLen = S.length;
  let sFirst = S[0];
  let tLen = T.length;
  let map = {};
  for (let i = 0; i < tLen; i++) {
    let curChar = T[i];
    for (let key in map) {
      let j = map[key] + 1;
      if (curChar === S[j]) {
        map[key] = j;
        if (j === sLen - 1) {
          num++;
          delete map[key];
        }
      } else {
        delete map[key];
      }
    }

    if (curChar === sFirst) {
      map[i] = 0;
    }
  }
  return num;
}
