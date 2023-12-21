export function parseInput(input: string[]) {
  let [n, m, k] = input[0].split(" ").map(Number);
  let arr = input
    .splice(1)
    .map((item) => item.split(" ").map(Number))
    .flat();

  let arr1 = pickNum(arr, n, m).sort((a, b) => {
    return a[0] + a[1] + a[2] - (b[0] + b[1] + b[2]);
  });
  console.log(`test:>`, arr1[0][k]);
}

function pickNum(arr: number[], n: number, m: number) {
  let res: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    let item: number[] = [];
    item.push(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      if (!canMatch(i, j, m)) {
        continue;
      }
      for (let k = j + 1; k < arr.length; k++) {
        if (!canMatch(i, k, m) || !canMatch(j, k, m)) {
          continue;
        }
        res.push([arr[i], arr[j], arr[k]]);
        // res.push([i, j, k]);
      }
    }
  }
  return res;
}

// y > x
function canMatch(x: number, y: number, m: number) {
  // 同列
  if ((y - x) % m === 0) {
    return false;
  }
  // 同行
  if (Math.floor(y / m) - Math.floor(x / m) === 0) {
    return false;
  }
  return true;
}

console.log(
  parseInput(
    `3 4 2
1 5 6 6
8 3 4 3
6 8 6 3`.split("\n")
  )
);
