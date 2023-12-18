/** https://www.nowcoder.com/practice/f9a4c19050fc477e9e27eb75f3bfd49c?
 * HJ41 称砝码
 */
type WeightMap = Record<number, number>;
export function parseInput(input: string[]) {
  let weightArr = input[1].split(" ").map((item) => Number(item));
  let numArr = input[2].split(" ").map((item) => Number(item));
  let map = {};
  let maxNum = 0;
  for (let i = 0; i < weightArr.length; i++) {
    map[weightArr[i]] = numArr[i];
    maxNum += numArr[i];
  }

  let resMap = {};
  function loop(curVal = 0, curMap: WeightMap, num = 0) {
    let items = pickItemFromMap(curMap);
    for (let [itemVal, itemMap] of items) {
      let newVal = itemVal + curVal;
      if (!resMap[newVal]) {
        resMap[newVal] = 0;
      }
      if (num < maxNum) {
        loop(newVal, itemMap, num + 1);
      }
    }
  }
  loop(0, map, 0);

  return Object.keys(resMap).length + 1;
}

function pickItemFromMap(map: WeightMap) {
  let res = [] as [number, WeightMap][];
  for (let key in map) {
    if (map[key] > 0) {
      res.push([Number(key), { ...map, [key]: map[key] - 1 }]);
    }
  }
  return res;
}

function main(s: string) {
  console.log(parseInput(s.split("\n").filter(Boolean)));
}
console.time();
main(`3
10 191 103
6 6 5`);
console.timeEnd();
