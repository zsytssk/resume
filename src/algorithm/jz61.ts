/** https://blog.csdn.net/CSDNLHCC/article/details/134475183
 * 【剑指offer】JZ61 扑克牌顺子
 * 没有重复， 最大和最小的值之间的差小于zeroNum
 */
export function parseInput(input: number[]) {
  let numArr = input.filter((item) => item !== 0).sort((a, b) => a - b);
  let zeroNum = input.length - numArr.length;
  let noRepeatArr = new Set(numArr);
  // 存在重复的数字
  if (noRepeatArr.size !== numArr.length) {
    return false;
  }

  // 最大和最小的值之间的差小于zeroNum
  let diff = numArr[numArr.length - 1] - numArr[0];
  if (diff + 1 - numArr.length > zeroNum) {
    return false;
  }

  return true;
}

console.log(parseInput([6, 3, 3, 5, 4]));
