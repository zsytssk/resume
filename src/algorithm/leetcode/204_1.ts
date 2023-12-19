/** https://leetcode.cn/problems/count-primes/
 * 204. 计数质数
 */

export function countPrimes(n: number): number {
  let primesArr: number[] = [];
  let notPrimes = new Set<number>();
  let next = 3;
  while (next < n) {
    if (notPrimes.has(next) === false) {
      primesArr.push(next);
    }

    let loopArr = Array.from(notPrimes);
    let len = loopArr.length;
    for (let i = 0; i < len; i++) {
      let num = loopArr[i] * next;
      if (num < n) {
        notPrimes.add(num);
      }
    }
    notPrimes.add(next);
    notPrimes.add(next * next);
    next += 2;
  }
  if (n > 2) {
    primesArr.unshift(2);
  }
  return primesArr.length;
}

console.time();
console.log(countPrimes(49999));
console.timeEnd();
