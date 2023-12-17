/** https://leetcode.cn/problems/permutation-ii-lcci/description/
 * 面试题 08.08. 有重复字符串的排列组合
 */

export function permutation(S: string): string[] {
  let map = {};
  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }
  let indexArr = [] as number[];
  for (let i = 0; i < S.length; i++) {
    indexArr.push(i);
  }
  let arr: Array<[string, number]> = [];
  for (let key in map) {
    arr.push([key, map[key]]);
  }
  arr.sort((a, b) => a[1] - b[1]);
  let resArr = [] as Array<(string | undefined)[]>;
  for (let item of arr) {
    if (!resArr.length) {
      let posArr = getArrayPos(indexArr, item[1]);
      resArr = fillArray(posArr, item[0], Array(S.length).fill(undefined));
      continue;
    }
    let tempArr = [] as Array<(string | undefined)[]>;
    for (const resItem of resArr) {
      let indexArr = [...resItem]
        .map((item, index) => {
          if (item === undefined) {
            return index;
          }
          return undefined;
        })
        .filter((item) => item !== undefined) as number[];
      let posArr = getArrayPos(indexArr, item[1]);
      let tempItem = fillArray(posArr, item[0], resItem);
      //   console.log(`test:>1`, { indexArr, tempItem, posArr, resItem });
      tempArr.push(...tempItem);
    }
    resArr = tempArr;
  }

  //   console.log(resArr);
  return resArr.map((item) => item.join(""));
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

function fillArray(
  posArr: Array<number[]>,
  char: string,
  arr: (string | undefined)[]
) {
  let res = [] as Array<(string | undefined)[]>;
  for (let subPos of posArr) {
    let subArr = [...arr];
    for (const pos of subPos) {
      subArr[pos] = char;
    }
    res.push(subArr);
  }
  return res;
}

// console.log(getArrayPos([1, 2, 3], 1));
console.log(permutation("ab"));
