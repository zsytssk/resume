/**
 * https://www.nowcoder.com/practice/7960b5038a2142a18e27e4c733855dac
 * HJ21 简单密码
 */
export function parseInput(input: string) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    result += transformChar(char);
  }
  return result;
}

const map = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};
function transformChar(char: string) {
  let code = char.charCodeAt(0);
  if (code <= "9".charCodeAt(0)) {
    return char;
  }
  if (code > "Z".charCodeAt(0)) {
    for (const key in map) {
      const value = map[key];
      if (value.indexOf(char) !== -1) {
        return key;
      }
    }
  }
  return toLowerCase(char);
}

function toLowerCase(char: string) {
  let charCode = char.charCodeAt(0);
  if (charCode == "Z".charCodeAt(0)) {
    return "a";
  }
  return String.fromCharCode(charCode + 32 + 1);
}
