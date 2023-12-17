/**
 * https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
 * 674. 最长连续递增序列
 */
export function findLengthOfLCIS(nums: number[]): number {
  let maxNum = 0;
  let curNum = 0;
  let preNum: number | undefined;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (preNum === undefined || num > preNum) {
      curNum++;
    } else {
      curNum = 1;
    }
    if (curNum > maxNum) {
      maxNum = curNum;
    }
    preNum = num;
  }

  if (curNum > maxNum) {
    maxNum = curNum;
  }

  return maxNum;
}

console.log(findLengthOfLCIS([1, 3, 5, 7]));
