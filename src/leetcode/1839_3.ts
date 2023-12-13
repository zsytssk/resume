/**
 * https://leetcode.cn/problems/longest-substring-of-all-vowels-in-order/submissions/
 */
export function longestBeautifulSubstring(word: string): number {
  let curStr = "";
  let set = new Set();
  let max = 0;
  let lastChar = "";
  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (curStr.length > 0) {
      if (lastChar > char) {
        if (set.size >= 5) {
          if (curStr.length > max) {
            max = curStr.length;
          }
        }
        curStr = "";
        set.clear();
      }
    }
    set.add(char);
    curStr += char;
    lastChar = char;
  }

  if (curStr.length > 0) {
    if (set.size >= 5) {
      if (curStr.length > max) {
        max = curStr.length;
      }
    }
    curStr = "";
    set.clear();
  }

  return max;
}
