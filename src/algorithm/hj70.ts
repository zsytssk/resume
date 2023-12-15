/**
 * https://www.nowcoder.com/practice/15e41630514445719a942e004edc0a5b
 * HJ70 矩阵乘法计算量估算
 */

type MatrixItem = [number, number];
export function parseInput(input: string[]) {
  let orderStr = input[input.length - 1];
  let array = input
    .slice(1, input.length - 1)
    .map((item) => item.split(" ").map((item) => parseInt(item)) as MatrixItem);

  let [order, _1] = parserArr(orderStr);
  const [_2, multiNum] = calc(order, array);
  //   console.log(`test:>0`, multiNum);
  return multiNum;
}

function calc(order: any[], array: MatrixItem[]) {
  let multiNum = 0;
  let left = order[0];
  let right = order[1];
  if (Array.isArray(left)) {
    const [newLeft, inNum] = calc(left, array);
    left = newLeft;
    multiNum += inNum;
  } else {
    left = array[getIndex(left)];
  }

  if (Array.isArray(right)) {
    const [newRight, inNum] = calc(right, array);
    // console.log(`test:>1`, { inNum, newRight });
    right = newRight;
    multiNum += inNum;
  } else {
    right = array[getIndex(right)];
  }
  //   console.log(`test:>`, multiNum);
  return [
    getResForm(left, right),
    multiNum + getMultiTime(left, right),
  ] as const;
}

function getResForm(left: MatrixItem, right: MatrixItem) {
  return [left[0], right[1]] as MatrixItem;
}

function getMultiTime(left: MatrixItem, right: MatrixItem) {
  return left[0] * left[1] * right[1];
}

function getIndex(s: string) {
  return s.charCodeAt(0) - "A".charCodeAt(0);
}

/** 解析数组 */
function parserArr(s: string, startIndex = 0) {
  let res: any[] = [];
  let endPos = startIndex;
  for (let i = startIndex + 1; i < s.length; i++) {
    let char = s[i];
    if (char === "(") {
      let [sub, newIndex] = parserArr(s, i);
      i = newIndex;
      res.push(sub);
      continue;
    }
    if (char === ")") {
      endPos = i;
      break;
    }
    res.push(char);
  }

  return [res, endPos] as const;
}

parseInput(
  `5
23 61
61 59
59 34
34 56
56 35
(A(((BC)D)E))`.split("\n")
);
// parseInput(
//   `3
// 50 10
// 10 20
// 20 5
// (A(BC))`.split("\n")
// );
