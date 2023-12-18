/**
 * https://www.nowcoder.com/practice/b4525d1d84934cf280439aeecc36f4af
 * NC17 最长回文子串
 * @param A string字符串
 * @return int整型
 */
export function getLongestPalindrome(s: string): number {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let max1 = getCenterRepInPos(s, i);
    let max2 = getGapRepInPos(s, i);
    max = Math.max(max1.length, max2.length, max);
  }
  return max;
}

function getCenterRepInPos(s: string, index: number) {
  let res = s[index];
  let i = 0;
  while (true) {
    i++;
    let prevIndex = index - i;
    let nextIndex = index + i;
    if (prevIndex < 0 || nextIndex >= s.length) {
      break;
    }
    let leftChar = s[prevIndex];
    let rightChar = s[nextIndex];
    if (leftChar !== rightChar) {
      break;
    }
    res = leftChar + res + rightChar;
  }
  return res;
}
function getGapRepInPos(s: string, index: number) {
  let res = "";
  let i = 0;
  while (true) {
    i++;
    let prevIndex = index - i + 1;
    let nextIndex = index + i;
    if (prevIndex < 0 || nextIndex >= s.length) {
      break;
    }
    let leftChar = s[prevIndex];
    let rightChar = s[nextIndex];
    if (leftChar !== rightChar) {
      break;
    }
    res = leftChar + res + rightChar;
  }
  return res;
}

console.log(getLongestPalindrome("baabccc"));
