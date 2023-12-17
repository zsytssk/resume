/** https://leetcode.cn/problems/combinations/
 * 面试题 77. 77. 组合
 * [1]每次从数组最后一个值 后取数组
 */
function combine(n: number, k: number): number[][] {
  let res = [] as number[][];
  for (let i = 0; i < k; i++) {
    if (!res.length) {
      res = createArr(0, n).map((item) => [item]);
      continue;
    }
    let tempArr = [] as number[][];
    for (const item of res) {
      let end = item[item.length - 1];

      // [1]
      let tempItem = createArr(end, n).map((_item) => [...item, _item]);
      tempArr.push(...tempItem);
    }
    res = tempArr;
  }
  return res.filter((item) => item.length === k);
}

function createArr(start: number, end: number) {
  let res = [] as number[];
  for (let i = start + 1; i <= end; i++) {
    res.push(i);
  }
  return res;
}

console.log(combine(4, 2));
