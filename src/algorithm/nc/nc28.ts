/** https://www.nowcoder.com/practice/c466d480d20c4c7c9d322d12ca7955ac
 * NC28 最小覆盖子串
 * @param S string字符串
 * @param T string字符串
 * @return string字符串
 */

type FindItem = {
  pos: number;
  range: number[];
  len: number;
};

export function minWindow(S: string, T: string): string {
  let posMap = findPosMap(S, T);
  let completeLen = T.length;

  let completeArr: FindItem[] = [];
  let saveArr: FindItem[] = [];
  let loopArr: FindItem[] = posMap[T[0]].map((item) => ({
    pos: 0,
    range: [item],
    len: 1,
  }));

  while (true) {
    let frameArr = getShortPath(loopArr, saveArr, completeArr, completeLen);
    // console.log(`test:>completeLen`, {
    //   len: loopArr.length,
    // });
    if (!frameArr.length) {
      break;
    }

    let tempArr = [] as FindItem[];
    for (let item of loopArr) {
      let nextPos = item.pos + 1;
      let curRange = item.range;
      let nextChar = T[nextPos];
      let nextList = posMap[nextChar].filter(
        (item) => curRange.indexOf(item) === -1
      );
      if (!nextList.length) {
        return "";
      }

      let nextArr = nextList.map((item) => {
        let range = [...curRange, item].sort((a, b) => a - b);
        return {
          pos: nextPos,
          range,
          len: getRangeLen(range),
        };
      });
      //   console.log(`test:>nextArr`, nextArr);
      tempArr.push(...nextArr);
    }
    frameArr = tempArr;
  }

  if (!completeArr.length) {
    return "";
  }
  let shortItem = completeArr[0];
  return S.substring(
    shortItem.range[0],
    shortItem.range[shortItem.range.length - 1] + 1
  );
}

export function getShortPath(
  loopArr: FindItem[],
  saveArr: FindItem[],
  completeArr: FindItem[],
  sLen: number
) {
  for (let i = loopArr.length - 1; i >= 0; i--) {
    let completeLen = completeArr[0]?.len ?? Infinity;

    let item = loopArr[i];
    if (item.pos === sLen - 1) {
      if (item.len < completeLen) {
        completeArr.unshift(item);
      }
      loopArr.splice(i, 1);
      continue;
    }

    // 超过范围的就不用处理了
    if (completeLen !== Infinity && item.len > completeLen) {
      loopArr.splice(i, 1);
      continue;
    }
  }

  if (!loopArr.length) {
    return [];
  }

  loopArr.sort((a, b) => {
    return a.len - b.len;
  });

  let minLen = loopArr[0].len;

  let res = [] as FindItem[];
  for (let i = loopArr.length - 1; i >= 0; i--) {
    let item = loopArr[i];
    let isShort = item.len === minLen;
    if (isShort) {
      res.push(item);
      loopArr.splice(i, 1);
    }
  }
  return res;
}

function getRangeLen(range: number[]) {
  return range[range.length - 1] - range[0] + 1;
}

function findPosMap(s: string, t: string) {
  function findCharPos(char: string) {
    let res: number[] = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === char) {
        res.push(i);
      }
    }

    return res;
  }

  let posMap: Record<string, number[]> = {};
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    posMap[char] = findCharPos(char);
  }

  return posMap;
}

console.time();
let res = minWindow(
  "rriswzrehwhvhbrzwkkogeuxsvfsipmzjwthxllfjtcsutrtfbhmidlcyruiiihrgdzdqkkzfnrcilvomecwjnyiguqpcaikdhovuaubnndyyyoleqhofiymcqdfqlpvvfqpgmqvawvywjlbbvrhdpvhfymyletglmxtyqpamkzkumlvhcemrzuzzixnoqvaevtflifzvejrrxoabtnvuhuwprjejgeobztokynffzyyymyzhluesoakflortuhvtclfabkhakfaxgzgrukmkmwszmjtgqqbubhucteeeledrejjawvkitckfnfnfvqzwxwbtcfznmcfqnqsjncughenwjaegqdeqbfldnktzmyrbojldnhjwnytyyzeqckigstlfdegrcztsigxxpgucepceoixssfakbmreqxyvytpibngqvcucrwihefbwncjooaugasbynthoinedryhkwqraxsxkwiamivtipwjdpqrxfwdywkitcztatsmsanelixvxweclwuldsqbocjhfkdhgxtyagclqciqynsllmyrgouvreeyqjfwhywjhbwxdepdtkofynyfdsauygspqznzykifleeqiwtcghjewhjazjwysrpiqchqorvzvcrfakjguskqzusbfp",
  "zxgohysqphhm"
);
console.log(res);
console.timeEnd();
