// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input: string[] = [];
// rl.on("line", function (line) {
//   input.push(line);
// });
// rl.on("close", () => {
//   console.log(parseInput(input));
// });

type Node = {
  value: number;
  connect: number[];
};

let treeMap: Record<number, Node> = {};
export function parseInput(input: string[]) {
  // 清理上个数据
  treeMap = {};

  const num = Number(input[0]);
  const list = input.slice(1).map((item) => item.split(" ").map(Number)) as [
    number,
    number
  ][];

  // 创建树
  for (const item of list) {
    const [index, next] = item;
    addTree(index, next);
    addTree(next, index);
  }

  // split树
  const dpList: [number, number][] = [];
  for (const key in treeMap) {
    let index = Number(key);
    const dp = splitTree(index);
    dpList.push([index, dp]);
  }

  const minDp = Math.min(...dpList.map((item) => item[1]));
  const minList = dpList.filter((item) => item[1] === minDp);
  // console.log(`test:>`, { dpList, minDp, minList });
  if (minList.length === 1) {
    return minList[0][0];
  }
  return minList.map((item) => item[0]).join(" ");
  // console.log(`test:>`, Object.keys(treeMap).length);
}

function addTree(index, next) {
  if (!treeMap[index]) {
    treeMap[index] = {
      value: index,
      connect: [next],
    };
  } else {
    treeMap[index].connect.push(next);
  }
}

function splitTree(excludeIndex: number) {
  const usedIndex: Record<number, number> = {};

  const cityList: [number, number[]][] = [];
  for (const key in treeMap) {
    if (Number(key) == excludeIndex) {
      continue;
    }
    // 已经访问过的
    if (usedIndex[key]) {
      continue;
    }
    const dpList = findDpList(Number(key), excludeIndex);
    for (const item of dpList) {
      usedIndex[item] = 1;
    }
    cityList.push([Number(key), dpList]);
  }

  // console.log(`test:>splitTree`, { excludeIndex, cityList });
  return Math.max(...cityList.map((item) => item[1].length));
}

function findDpList(findIndex: number, excludeIndex: number) {
  const list: number[] = [];
  const findList = [findIndex];
  const usedIndex: Record<number, number> = {};
  while (true) {
    if (!findList.length) {
      break;
    }

    const curIndex = findList.shift() as number;
    if (usedIndex[curIndex]) {
      continue;
    }
    usedIndex[curIndex] = 1;

    list.push(curIndex);

    const curNode = treeMap[curIndex];
    const next = curNode.connect.filter((item) => item != excludeIndex);
    if (next.length) {
      findList.push(...next);
    }
  }
  // console.log(`test:>findDpList`, { findIndex, excludeIndex, list });
  return list;
}
