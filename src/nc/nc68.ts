/**
 * https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4
 * NC68 跳台阶 == 排列组合
 * @param number int整型
 * @return int整型
 */
export function jumpFloor(number: number): number {
  const two_num = Math.floor(number / 2);
  let result = 0;
  for (let i = 0; i <= two_num; i++) {
    let one_num = number - i * 2;
    let all_num = one_num + i;
    let num = factorial(all_num) / (factorial(all_num - i) * factorial(i));
    result += num;
  }
  return result;
}

function factorial(n) {
  let p = 1;
  for (let i = n; i > 0; i--) p *= i;
  return p;
}
