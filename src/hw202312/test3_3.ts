export function parseInput(input: string[]) {
  let [n, m, k] = input[0].split(" ").map(Number);
  let rawList = input.splice(1).map((item) => item.split(" ").map(Number));
  let flatList = flatArr(rawList);
  let arr1 = pickNum(flatList, n, m).sort((a, b) => {
    return a[0] + a[1] + a[2] - (b[0] + b[1] + b[2]);
  });

  return arr1[0][k];
}

function pickNum(arr: number[], n: number, m: number) {
  let res: number[][] = [];

  let loopArr: number[][] = [[]];
  for (let i = 0; i < arr.length; i++) {
    let stepArr = Array.from(loopArr);
    for (let j = 0; j < stepArr.length; j++) {
      let item = stepArr[j];
      if (item.length >= n) {
        continue;
      }
      if (canMatch(item, i, m)) {
        let nextItem = [...item, i];
        if (nextItem.length === n) {
          res.push(nextItem.map((item) => arr[item]));
        } else {
          loopArr.push([...item, i]);
        }
      }
    }
  }
  return res;
}

function canMatch(pickList: number[], y: number, m: number) {
  if (pickList.length === 0) {
    return true;
  }
  // y > x
  for (let x of pickList) {
    // 同列
    if ((y - x) % m === 0) {
      return false;
    }
    // 同行
    if (Math.floor(y / m) - Math.floor(x / m) === 0) {
      return false;
    }
  }
  return true;
}

function flatArr(arr: number[][]) {
  let res: number[] = [];
  for (let item of arr) {
    res.push(...item);
  }
  return res;
}

console.time();
console.log(
  parseInput(
    `3 4 2
1 5 6 6
8 3 4 3
6 8 6 3`.split("\n")
  )
);

console.timeEnd();
