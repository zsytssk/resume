export function parseInput(input: string[]) {
  let s = input[0];
  let arr = splitStr(s);
  let res = "";
  for (let item of arr) {
    let char = String.fromCharCode(parseInt(item) + "a".charCodeAt(0) - 1);
    if (char >= "a" && char <= "z") {
      res += char;
    }
  }

  return res;
}

function splitStr(str: string) {
  let arr = str.split("*");
  let last = arr.pop();
  let res: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if (cur.length > 2) {
      let rest = cur.substring(0, cur.length - 2).split("");
      res.push(...rest);
    }
    let starPrefix = cur.substring(cur.length - 2);
    res.push(starPrefix + "*");
  }
  if (last?.length) {
    res.push(...last.split(""));
  }
  // console.log(res);
  return res;
}

// console.log(splitStr(`99110*20*19*20*11`));
console.log(parseInput(["20*19*20*"]));
