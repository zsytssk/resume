/**
 * https://www.nowcoder.com/practice/7960b5038a2142a18e27e4c733855dac
 * HJ21 简单密码
 */

const map = {
  abc: 2,
  def: 3,
  ghi: 4,
  jkl: 5,
  mno: 6,
  pqrs: 7,
  tuv: 8,
  wxyz: 9,
};

export function parseInput(input: string) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char >= "0" && char <= "9") {
      result += char;
    } else if (char >= "a" && char <= "z") {
      result += getLowCaseNum(char);
    } else {
      result += convertUppercase(char);
    }
  }
  return result;
}

function getLowCaseNum(char: string) {
  for (const key in map) {
    if (key.indexOf(char) !== -1) {
      return map[key];
    }
  }
  throw new Error("some thing wrong!");
}
function convertUppercase(char: string) {
  const code = char.charCodeAt(0);
  const newCode = code + 32 + 1;
  if (newCode > 122) {
    return "a";
  }
  return String.fromCharCode(newCode);
}
