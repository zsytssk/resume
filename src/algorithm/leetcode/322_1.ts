/** https://leetcode.cn/problems/coin-change/
 * 322. 零钱兑换
 **/
export function coinChange(coins: number[], amount: number): number {
  if (amount == 0) {
    return 0;
  }
  coins.sort((a, b) => a - b);

  let minStep = Infinity;
  find(
    coins.filter((item) => item <= amount),
    amount
  );
  function find(coins: number[], amount: number, step = 0) {
    if (step > minStep) {
      return false;
    }

    if (amount === 0) {
      if (step < minStep) {
        minStep = step;
      }
      return true;
    }
    if (coins.length === 0) {
      return false;
    }

    for (let i = coins.length - 1; i >= 0; i--) {
      let curItem = coins[i];
      let curStep = Math.floor(amount / curItem);
      for (let n = curStep; n >= 0; n--) {
        let rest = amount - curItem * n;
        // let subArr = coins.filter((item) => item !== curItem && item < rest);
        let subArr = coins.filter((item) => item !== curItem && item < rest);
        let subFind = find(subArr, rest, step + n);

        if (subFind) {
          return true;
        }
      }
    }
  }

  if (minStep === Infinity) {
    return -1;
  }
  return minStep;
}

console.time();

// console.log(coinChange([186, 419, 83, 408], 6249));
console.log(
  coinChange([411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864)
);
console.timeEnd();
