export function coinChange(coins: number[], amount: number): number {
  let map = Array(amount + 1);
  function loopFn(n: number) {
    if (map[n]) {
      return map[n];
    }
    if (n === 0) {
      return 0;
    }
    let arr: number[] = [];
    for (let coin of coins) {
      if (coin <= n) {
        arr.push(loopFn(n - coin) + 1);
      }
    }
    let res = Infinity;
    if (arr.length) {
      res = Math.min(...arr);
    }
    map[n] = res;
    return res;
  }
  let res = loopFn(amount);
  console.log(`test:>`, map);
  return res === Infinity ? -1 : res;
}

console.time();
console.log(coinChange([1, 2, 5], 100));
console.timeEnd();
