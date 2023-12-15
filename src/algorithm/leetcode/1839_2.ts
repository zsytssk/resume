/**
 * https://leetcode.cn/problems/longest-substring-of-all-vowels-in-order/submissions/
 */
export function longestBeautifulSubstring(word: string): number {
  let arr: string[] = [];
  let curStr = "";
  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (curStr.length > 0) {
      let lastChar = curStr[curStr.length - 1]; // 性能大户
      if (lastChar.charCodeAt(0) > char.charCodeAt(0)) {
        arr.push(curStr);
        curStr = "";
      }
    }

    curStr += char;
  }
  arr.push(curStr);
  arr = arr.filter((item) => item.length >= 5);
  // console.log(`test:>1`, arr);

  arr = arr.filter((item) => isBeauty(item));

  arr.sort((a, b) => b.length - a.length);
  if (!arr.length) {
    return 0;
  }
  return arr[0].length;
}

function isBeauty(word: string) {
  let arr = ["a", "e", "i", "o", "u"];
  for (const item of arr) {
    if (word.indexOf(item) === -1) {
      return false;
    }
  }
  return true;
}
