export function parseInput(input: string[]) {
  input.pop();
  for (let item of input) {
    console.log(parseNum(item));
  }
}

const extraChar = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};
function parseNum(num: string) {
  const numStr = num.substring(2);
  let len = numStr.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    let curScope = Math.pow(16, i);
    let curStr = numStr[len - 1 - i];
    let curNum = extraChar[curStr] ? extraChar[curStr] : curStr;
    curNum = Number(curNum);
    sum += curNum * curScope;
  }

  return sum;
}

console.log(parseNum(`0x1`));
