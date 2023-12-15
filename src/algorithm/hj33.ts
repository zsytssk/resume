/**
 * https://www.nowcoder.com/practice/66ca0e28f90c42a196afd78cc9c496ea
 * HJ33 整数与IP地址间的转换
 */
export function parseInput(input: string) {
  if (input.indexOf(".") !== -1) {
    return ipToNum(input);
  }
  return numToIp(input);
}

function ipToNum(input: string) {
  let list = input.split(".");
  let result = "";
  for (const num of list) {
    let erNum = Number(num).toString(2);
    result += getZeroLen(8 - erNum.length) + erNum;
  }
  return parseInt(result, 2);
}
function numToIp(input: string) {
  let str = Number(input).toString(2);
  str = getZeroLen(32 - str.length) + str;
  let arr: string[] = [];
  for (let i = 0; i < 4; i++) {
    arr.push(str.slice(i * 8, i * 8 + 8));
  }
  return arr.map((item) => parseInt(item, 2)).join(".");
}
function getZeroLen(len: number) {
  if (len <= 0) {
    return "";
  }
  return Array(len).fill("0").join("");
}
