/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param S string字符串
 * @param T string字符串
 * @return string字符串
 */

export function minWindow(S: string, T: string): any {
  // write code here
  let needs = new Map(); // T字符串中每种字符的map
  let str = new Map(); //
  // 获取需要的字符串
  for (let i = 0; i < T.length; i++) {
    if (needs.has(T[i])) {
      needs.set(T[i], needs.get(T[i]) + 1);
    } else {
      needs.set(T[i], 1);
    }
  }

  let left = 0,
    right = 0,
    len = Infinity,
    valid = 0, // 当前截取的子字符串中符合的字符种类
    start = 0;
  while (right < S.length) {
    // 如果需要的集合里面有这个key，则插入
    const d = S[right];
    right++;
    if (needs.has(d)) {
      // 如果str已经有这个key，则value加1
      if (str.has(d)) {
        str.set(d, str.get(d) + 1);
      } else {
        str.set(d, 1);
      }
      if (str.get(d) === needs.get(d)) valid++;
    }

    // 当满足条件时
    while (valid === needs.size) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      let c = S[left];
      left++;
      if (needs.has(c)) {
        if (needs.get(c) === str.get(c)) valid--;
        str.set(c, str.get(c) - 1);
      }
    }
  }
  return len === Infinity ? "" : S.substr(start, len);
}

console.time();
let res = minWindow(
  "mspkqlcdmrwgrmcaytxilusinwgjvkdhfuuvfwarpxaglegjyftlblvqjezhqeovyisfgtxvqzdbdlmbthowumnfqomitbetlyzsrwpjvvkygycbfsyzgnfwbrhwunqilpadnrmkmzkvzowfhwgnjnmlftjbgzjtolwddlnrmymlmlsvhzltmzgtspvapetfqsjvfymrybelmxivwtokuueokbobhkgzerujqjcomgbadmxbhmociuquvhxereexvainlkcxsfxyrvzzjpbtjrqgynlrtpqrryedkiadqabhxcigslbdftkfhvxcmptdoagykjdajekgjsodgrgllqqulpwzfsdvsjtcszfddplojbrptyagqtaeiydnqgiksepmduqildxwfqmaqoghhilqiqfbxqlrucdzythlzgiexwepkmwuwjmeatfzjtqfxtewpohourutnajamhwiriotbwsnpismdxkunskhjedzeozsvvaofrhinzvcjoqpnbjavwjgcohjcgbadeokvytizomjeearhlrchdlkrstwbwwgamrxkkhkatvfavwhgqmqvzamrviutebutstfcbpcwmjwjigqyuittkhmfqhywkupcqvgrmkpbumkcuacokxhuevzwcatmwkqmhwfwjvxfjhhdkltuicpoxqlcsgqpshdafjwqevvpcesmpljzpyomqbqjjhabqddvozoswjhzobndowfdwvsnwiwhryihbmfqntkkculsxyyoxdrtyliwwgdnenvgbcypvkbzgmsemqujvlftzprvwwialfinjieetfgbtahhqbtlnagop",
  "zjlxtmibwxkfbraixbdx"
);
// let res = minWindow(
//   "chusviimasafkxqhrwilaczecdvkeathipbfzjtbdvgpszwlxezxgydlbaxgbsplhssjdlkghrwbssnpzonhmssptsxukmfugxdjknqrgotyiiohwdrkvlzqdxmolti",
//   "sslddavu"
// );
console.log(res);
console.timeEnd();
