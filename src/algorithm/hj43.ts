/**
 * https://www.nowcoder.com/practice/cf24906056f4488c9ddb132f317e03bc?
 * HJ43 迷宫问题
 */

type Pos = [number, number];
export function parseInput(input: string[]) {
  let size = input[0].split(" ").map(Number) as [number, number];
  let arr = input.slice(1).map((item) => item.split(" ").map(Number));
  let start: Pos = [0, 0];
  let end: Pos = [size[0] - 1, size[1] - 1];

  let tempMap = new Map<string, boolean>();
  let resPath: Pos[] = [start];

  findPath(start, [start]);
  function findPath(pos: Pos, path: Pos[]) {
    tempMap.set(`${pos[0]}-${pos[1]}`, true);
    let next = getNext(pos, arr).filter((item) => {
      if (tempMap.get(`${item[0]}-${item[1]}`)) {
        return false;
      }
      if (arr[item[0]][item[1]] === 1) {
        return false;
      }
      return true;
    });

    if (next.length === 0) {
      return false;
    }

    for (const item of next) {
      if (item[0] === end[0] && item[1] === end[1]) {
        resPath = [...path, item];
        return true;
      }

      let subInfo = findPath(item, [...path, item]);
      if (subInfo) {
        return true;
      }
    }
  }

  return resPath.map((item) => `(${item[0]},${item[1]})`).join("\n");
}

function getNext(pos: Pos, arr: number[][]) {
  let res: Pos[] = [];
  let maxX = arr[0].length - 1;
  let maxY = arr.length - 1;

  // top
  if (pos[0] > 0) {
    res.push([pos[0] - 1, pos[1]]);
  }
  // bottom
  if (pos[0] < maxY) {
    res.push([pos[0] + 1, pos[1]]);
  }
  // left
  if (pos[1] > 0) {
    res.push([pos[0], pos[1] - 1]);
  }
  // right
  if (pos[1] < maxX) {
    res.push([pos[0], pos[1] + 1]);
  }

  return res;
}

console.log(
  parseInput(
    `5 5
0 1 0 0 0
0 1 1 1 0
0 0 0 0 0
0 1 1 1 0
0 0 0 1 0`.split("\n")
  )
);
