/** https://leetcode.cn/problems/combinations/
 * 面试题 77. 77. 组合
 */
export function combine(n: number, k: number): number[][] {
  let arr = [] as number[];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return getArrayPos(arr, k);
}
function getArrayPos(arr: number[], m: number) {
  let resMap = [] as Array<number[]>;
  for (let i = 0; i < m; i++) {
    if (!resMap.length) {
      resMap.push(...arr.map((item) => [item]));
      continue;
    }
    let loopMap = {};
    for (const resItem of resMap) {
      let subArr = arr.filter((item) => resItem.indexOf(item) === -1);
      for (let item of subArr) {
        let keyArr = [...resItem, item].sort((a, b) => a - b);
        let key = keyArr.join("");
        if (!loopMap[key]) {
          loopMap[key] = keyArr;
        }
      }
    }
    resMap = [];
    for (const key in loopMap) {
      resMap.push(loopMap[key]);
    }
  }
  return resMap;
}

console.log(combine(20, 10));
