/**
 * https://www.nowcoder.com/practice/03ba8aeeef73400ca7a37a5f3370fe68?
 * HJ27 查找兄弟单词
 * @param input
 * @returns
 */

export function parseInput(input: string) {
  let arr = input.split(" ");
  let list = arr.slice(1, arr.length - 2);
  let word = arr[arr.length - 2];
  let index = parseInt(arr[arr.length - 1]);

  let sortWord = sortStr(word);
  let res: string[] = [];
  for (const item of list) {
    if (item === word) {
      continue;
    }
    if (item.length !== word.length) {
      continue;
    }
    if (sortStr(item) === sortWord) {
      res.push(item);
    }
  }
  res.sort();
  //   console.log(`test:>`, res);
  if (index > res.length) {
    return res.length;
  }
  return `${res.length}\n${res[index - 1]}`;
}

function sortStr(s: string) {
  return s.split("").sort().join("");
}
