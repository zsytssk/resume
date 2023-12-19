/** https://www.nowcoder.com/practice/2aa32b378a024755a3f251e75cbf233a?
 * HJ29 字符串加解密
 */
let charUp = /[A-Z]/;
let charLow = /[a-z]/;
let numReq = /[0-9]/;
export function parseInput(input: string[]) {
  let encodeStr = input[0];
  let decodeStr = input[1];

  let encodeRes = "";
  for (let i = 0; i < encodeStr.length; i++) {
    let char = encodeStr[i];
    if (charLow.test(char)) {
      let code = char.charCodeAt(0) - 31;
      if (code > "Z".charCodeAt(0)) {
        code = "A".charCodeAt(0);
      }
      let newChar = String.fromCharCode(code);

      encodeRes += newChar;
    } else if (charUp.test(char)) {
      let code = char.charCodeAt(0) + 33;
      if (code > "z".charCodeAt(0)) {
        code = "a".charCodeAt(0);
      }
      let newChar = String.fromCharCode(code);
      encodeRes += newChar;
    } else if (numReq.test(char)) {
      let num = Number(char) + 1;
      if (num > 9) {
        num = 0;
      }
      encodeRes += num;
    }
  }

  let decodeRes = "";
  for (let i = 0; i < decodeStr.length; i++) {
    let char = decodeStr[i];
    if (charUp.test(char)) {
      let code = char.charCodeAt(0) + 31;
      if (code < "a".charCodeAt(0)) {
        code = "z".charCodeAt(0);
      }
      let newChar = String.fromCharCode(code);
      decodeRes += newChar;
    } else if (charLow.test(char)) {
      let code = char.charCodeAt(0) - 33;
      if (code < "A".charCodeAt(0)) {
        code = "Z".charCodeAt(0);
      }
      let newChar = String.fromCharCode(code);

      decodeRes += newChar;
    } else if (numReq.test(char)) {
      let num = Number(char) - 1;
      if (num < 0) {
        num = 9;
      }
      decodeRes += num;
    }
  }

  return [encodeRes, decodeRes].join("\n");
}

console.log(
  parseInput(
    `2OA92AptLq5G1lW8564qC4nKMjv8C
B5WWIj56vu72GzRja7j5`.split("\n")
  )
);
