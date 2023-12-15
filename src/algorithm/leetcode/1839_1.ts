/**
 * https://leetcode.cn/problems/longest-substring-of-all-vowels-in-order/submissions/
 *
 */
export function longestBeautifulSubstring(word: string): number {
  let arr: string[] = [];
  let curStr = "";
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (char === "a" && i !== 0 && word[i - 1] !== "a") {
      arr.push(curStr);
      curStr = "";
    }
    curStr += char;
  }
  arr.push(curStr);
  console.log(`test:>1`, arr);
  arr = arr.filter((item) => item.length >= 5);

  // 性能大户
  arr = arr
    .map((item) => getLegalSubStr(item))
    .filter((item) => isBeauty(item));

  // 性能大户
  arr.sort((a, b) => b.length - a.length);
  console.log(`test:>2`, arr);
  if (!arr.length) {
    return 0;
  }
  return arr[0].length;
}

function getLegalSubStr(word: string) {
  let curStr = "";
  for (let i = 0; i < word.length; i++) {
    let temp = curStr + word[i];
    if (!isLegal(temp)) {
      break;
    }
    curStr = temp;
  }
  return curStr;
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

function isLegal(word: string) {
  let orderWord = word
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
  return orderWord === word;
}
