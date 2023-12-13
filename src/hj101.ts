/**
 * https://www.nowcoder.com/practice/dd0c6b26c9e541f5b935047ff4156309
 * HJ101 输入整型数组和排序标识，对其元素按照升序或降序进行排序
 *
 */
export function parseInput(input: string[]) {
  let num = parseInt(input[0]);
  let order = parseInt(input[2]);
  let arr = input[1].split(" ").map((a) => parseInt(a));

  if (order === 0) {
    arr.sort((a, b) => a - b);
  } else {
    arr.sort((a, b) => b - a);
  }

  return arr.join(" ");
}
