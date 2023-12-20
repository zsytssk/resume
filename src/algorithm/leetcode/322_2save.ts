/** https://leetcode.cn/problems/coin-change/
 * 322. 零钱兑换
 **/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // base case
  for (let i = 1; i <= amount; i++) {
    const subProblem: number[] = [];
    for (let coin of coins) {
      if (i - coin < 0) continue;
      subProblem.push(dp[i - coin] + 1);
    }
    dp[i] = Math.min(...subProblem);
  }
  // console.log(dp);
  return dp[amount] === 0 ? -1 : dp[amount];
};

console.time();
console.log(coinChange([186, 419, 83, 408], 6249));
// console.log(coinChange([2, 3, 5], 11));
// console.log(
//   coinChange([411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864)
// );
console.timeEnd();
