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
type State = {
  saveArr: FindItem[];
  loopArr: FindItem[];
  completeArr: FindItem[];
  shortLen: number;
};

export function minWindow(S: string, T: string): string {
  let posMap = findPosMap(S, T);
  let completeLen = T.length;

  let state: State = {
    completeArr: [],
    saveArr: [],
    loopArr: posMap[T[0]].map((item) => ({
      pos: 0,
      range: [item],
      len: 1,
    })),
    shortLen: S.length,
  };

  while (true) {
    let stepArr = getShortPath(state, completeLen);
    console.log(`test:>completeLen`, {
      loopLen: state.loopArr.length,
      saveLen: state.saveArr.length,
      completeLen: state.completeArr.length,
    });
    if (!stepArr.length && !state.saveArr.length) {
      break;
    }

    let tempArr = [] as FindItem[];
    for (let item of stepArr) {
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
      // console.log(`test:>nextArr`, nextArr);
      tempArr.push(...nextArr);
    }
    state.loopArr = state.loopArr.concat(tempArr);
  }

  console.log(`test:>completeLen`, {
    loopLen: state.loopArr.length,
    saveLen: state.saveArr.length,
    completeLen: state.completeArr.length,
  });
  if (!state.completeArr.length) {
    return "";
  }
  let shortItem = state.completeArr[0];
  return S.substring(
    shortItem.range[0],
    shortItem.range[shortItem.range.length - 1] + 1
  );
}

export function getShortPath(state: State, sLen: number) {
  let maxLen = 1000;

  if (state.loopArr.length > maxLen) {
    let arr = state.loopArr.splice(maxLen);
    state.saveArr = state.saveArr.concat(arr);
  }

  if (state.loopArr.length === 0) {
    let num = Math.min(maxLen, state.saveArr.length / 2);
    let arr = state.saveArr.splice(num);
    state.loopArr = arr;
  }

  for (let i = state.loopArr.length - 1; i >= 0; i--) {
    let shortLen = state.shortLen;

    let item = state.loopArr[i];
    if (item.pos === sLen - 1) {
      if (item.len < shortLen) {
        state.completeArr.unshift(item);
        state.shortLen = item.len;
      }
      state.loopArr.splice(i, 1);
      continue;
    }

    // 超过范围的就不用处理了
    if (item.len > shortLen) {
      state.loopArr.splice(i, 1);
      continue;
    }
  }

  if (!state.loopArr.length) {
    return [];
  }

  state.loopArr.sort((a, b) => {
    return a.len - b.len;
  });

  let minLen = state.loopArr[0].len;

  let res = [] as FindItem[];
  for (let i = state.loopArr.length - 1; i >= 0; i--) {
    let item = state.loopArr[i];
    let isShort = item.len === minLen;
    if (isShort) {
      res.push(item);
      state.loopArr.splice(i, 1);
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
// let res = minWindow(
//   "mspkqlcdmrwgrmcaytxilusinwgjvkdhfuuvfwarpxaglegjyftlblvqjezhqeovyisfgtxvqzdbdlmbthowumnfqomitbetlyzsrwpjvvkygycbfsyzgnfwbrhwunqilpadnrmkmzkvzowfhwgnjnmlftjbgzjtolwddlnrmymlmlsvhzltmzgtspvapetfqsjvfymrybelmxivwtokuueokbobhkgzerujqjcomgbadmxbhmociuquvhxereexvainlkcxsfxyrvzzjpbtjrqgynlrtpqrryedkiadqabhxcigslbdftkfhvxcmptdoagykjdajekgjsodgrgllqqulpwzfsdvsjtcszfddplojbrptyagqtaeiydnqgiksepmduqildxwfqmaqoghhilqiqfbxqlrucdzythlzgiexwepkmwuwjmeatfzjtqfxtewpohourutnajamhwiriotbwsnpismdxkunskhjedzeozsvvaofrhinzvcjoqpnbjavwjgcohjcgbadeokvytizomjeearhlrchdlkrstwbwwgamrxkkhkatvfavwhgqmqvzamrviutebutstfcbpcwmjwjigqyuittkhmfqhywkupcqvgrmkpbumkcuacokxhuevzwcatmwkqmhwfwjvxfjhhdkltuicpoxqlcsgqpshdafjwqevvpcesmpljzpyomqbqjjhabqddvozoswjhzobndowfdwvsnwiwhryihbmfqntkkculsxyyoxdrtyliwwgdnenvgbcypvkbzgmsemqujvlftzprvwwialfinjieetfgbtahhqbtlnagop",
//   "zjlxtmibwxkfbraixbdx"
// );
let res = minWindow(
  "chusviimasafkxqhrwilaczecdvkeathipbfzjtbdvgpszwlxezxgydlbaxgbsplhssjdlkghrwbssnpzonhmssptsxukmfugxdjknqrgotyiiohwdrkvlzqdxmolti",
  "sslddavu"
);
console.log(res);
console.timeEnd();
