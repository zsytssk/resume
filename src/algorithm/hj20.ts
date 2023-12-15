/**
 * https://www.nowcoder.com/practice/184edec193864f0985ad2684fbc86841
 * HJ20 密码验证合格程序
 * “不能有长度大于2的包含公共元素的子串重复” 换成 “不能有长度大于2的子串重复出现” 是不是更好理解
 */

export function parseInput(input: string) {
  if (input.length < 8) {
    return "NG";
  }
  const typeArr = new Set();
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    const type = getCharType(char);
    if (!typeArr.has(type)) {
      typeArr.add(type);
    }
    if (typeArr.size >= 3) {
      break;
    }
  }

  if (typeArr.size < 3) {
    return "NG";
  }

  if (hasRepeatSubString(input, 3)) {
    return "NG";
  }

  return "OK";
}

function hasRepeatSubString(line: string, length: number) {
  const end = line.length - (line.length % length) - length;
  for (var i = 0; i <= end; i++) {
    const sub = line.slice(i, i + length);
    if (line.slice(i + length).includes(sub)) {
      return true;
    }
  }
  return false;
}

function getCharType(char: string) {
  if ("0123456789".indexOf(char) !== -1) {
    return "number";
  }
  let charCode = char.charCodeAt(0);

  if (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) {
    return "lowerCase";
  }
  if (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) {
    return "upperCase";
  }

  return "other";
}
