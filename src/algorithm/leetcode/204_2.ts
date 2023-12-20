/** https://leetcode.cn/problems/count-primes/
 * 204. 计数质数
 */

export function countPrimes(n: number): number {
  const d: boolean[] = Array(n).fill(true);
  let count = 0;
  for (let i = 2; i < n; ++i) {
    if (d[i]) {
      ++count;
      for (let j = i * i; j < n; j += i) {
        d[j] = false;
      }
    }
  }
  return count;
}

console.time();
console.log(countPrimes(49999));
console.timeEnd();
