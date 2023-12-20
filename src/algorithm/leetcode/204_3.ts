/** https://leetcode.cn/problems/count-primes/
 * 204. 计数质数
 */

export function countPrimes(n: number): number {
  const buffer = new ArrayBuffer(n);
  const arr = new Uint8Array(buffer);
  let count = 0;
  for (let i = 2; i < n; i += 1) {
    if (!arr[i]) {
      ++count;
      for (let j = i * i; j < n; j += i) {
        if (!arr[j]) {
          arr[j] = 1;
        }
      }
    }
  }
  return count;
}

console.time();
console.log(countPrimes(499979));
console.timeEnd();
