export function parseInput(input: string[]) {
  let list = input[0].split(" ").map(Number);
  let k = list[0];
  let n = list[1] + "";
  let m = list[2];
  if (!k || !n || !m) {
    return 0;
  }

  let str = parseK(k, m);

  let num = 0;
  let i = 0;
  while (true) {
    if (i >= str.length) {
      break;
    }
    let curStr = str.substring(i);
    if (curStr.startsWith(n)) {
      num++;
      i += n.length;
    } else {
      i++;
    }
  }
  return num;
}

function parseK(k: number, m: number) {
  let res: number[] = [];
  let i = 0;
  while (true) {
    if (k < Math.pow(m, i)) {
      break;
    }
    let rest = k % Math.pow(m, i);
    let curRest = (k - rest) % Math.pow(m, i + 1);
    let curNum = curRest / Math.pow(m, i);
    res.push(curNum);
    i++;
  }
  return res.reverse().join("");
}
console.log(parseK(10, 10));
// console.log(parseInput(["10 10 10"]));
