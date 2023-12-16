/**
 * https://www.nowcoder.com/practice/181a1a71c7574266ad07f9739f791506
 * HJ65 查找两个字符串a,b中的最长公共子串
 * 便利第一个(str1) 记录在另一个(str2)中出现的次数 `Record<str1Index, Array<[str2IndexStart, str2IndexUpdate]>>`
 * 每次前进 看看匹配的还在不在，不再的话，就放到 result`Array<[str1Index, string]>` 中，在继续
 * result 中最长的字符串的长度
 */
export function parseInput(input: string[]) {
  input.sort((a, b) => a.length - b.length);
  let str1 = input[0];
  let str2 = input[1];
  let result: Array<[number, string]> = [];
  let map: Record<number, Array<[number, number]>> = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    for (const key in map) {
      let matchList = map[key];
      if (!matchList.length) {
        delete map[key];
        continue;
      }
      for (let j = matchList.length - 1; j >= 0; j--) {
        let item = matchList[j];
        if (str2[item[1]] === char) {
          item[1] += 1;
        } else {
          let item = matchList.splice(j, 1)[0];
          result.push([Number(key), str2.substring(item[0], item[1])]);
        }
      }
    }
    const list = findIndexList(char, str2);
    map[i] = list.map((item) => [item, item + 1]);
  }

  for (const key in map) {
    let matchList = map[key];
    for (const item of matchList) {
      if (item.length) {
        result.push([Number(key), str2.substring(item[0], item[1])]);
      }
    }
  }

  result.sort((a, b) => {
    let diff = b[1].length - a[1].length;
    if (diff !== 0) {
      return diff;
    }
    return a[0] - b[0];
  });
  //   console.log(`test:>`, { result });
  return result[0][1];
}

function findIndexList(char: string, str: string) {
  let result: number[] = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      result.push(i);
    }
  }
  return result;
}
// gcn nlo
parseInput([
  "nvlrzqcjltmrejybjeshffenvkeqtbsnlocoyaokdpuxutrsmcmoearsgttgyyucgzgcnurfbubgvbwpyslaeykqhaaveqxijc",
  "wkigrnngxehuiwxrextitnmjykimyhcbxildpnmrfgcnevjyvwzwuzrwvlomnlogbptornsybimbtnyhlmfecscmojrxekqmj",
]);
