/**
 * https://www.nowcoder.com/practice/184edec193864f0985ad2684fbc86841
 * HJ20 密码验证合格程序
 * “不能有长度大于2的包含公共元素的子串重复” 换成 “不能有长度大于2的子串重复出现” 是不是更好理解
 */

export function parseInput(input: string[]) {
  const results: string[] = [];
  for (const item of input) {
    if (detectStr(item)) {
      if (!hasRepeat(item)) {
        results.push("OK");
        continue;
      }
    }
    results.push("NG");
  }
  return results.join("\n");
}

export function hasRepeat(str: string) {
  for (let i = 0; i < str.length - 3; i++) {
    for (let j = i + 3; j < str.length; j++) {
      let testStr = str.substring(i, j);
      let restStr = str.substring(j);
      if (restStr.indexOf(testStr) !== -1) {
        return true;
      }
    }
  }
  return false;
}

export function detectStr(str: string) {
  const map = {};
  if (str.length <= 8) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char < "0") {
      map["sign"] = true;
      continue;
    }
    if (char >= "0" && char <= "9") {
      map["num"] = true;
      continue;
    }
    if (char >= "A" && char <= "Z") {
      map["lchar"] = true;
      continue;
    }
    if (char >= "a" && char <= "z") {
      map["bchar"] = true;
      continue;
    }
  }

  return Object.keys(map).length >= 3;
}
