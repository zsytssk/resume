/**
 * https://leetcode.cn/problems/rotting-oranges/
 * 994. 腐烂的橘子
 */
export function orangesRotting(grid: number[][]): number {
  let allNum = 0;
  let rotNum = 0;
  let newRotArr = [] as Pos[];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 2) {
        newRotArr.push({ x, y });
        rotNum++;
      }
      if (grid[y][x] !== 0) {
        allNum++;
      }
    }
  }
  if (rotNum === allNum) {
    return 0;
  }

  let step = 0;
  while (true) {
    let tempArr = [] as Pos[];
    for (let item of newRotArr) {
      let next = getRelativePos(item, grid);
      for (let nextItem of next) {
        let { x, y } = nextItem;
        if (grid[y][x] === 1) {
          grid[y][x] = 2;
          tempArr.push(nextItem);
          rotNum++;
        }
      }
    }

    if (!tempArr?.length) {
      break;
    }
    newRotArr = tempArr;
    step++;
  }
  // console.log(`test:>`, { rotNum, allNum });
  if (rotNum === allNum) {
    return step;
  }

  return -1;
}

type Pos = { x: number; y: number };
function getRelativePos(pos: Pos, grid: number[][]) {
  let maxX = grid[0].length;
  let maxY = grid.length;

  let res = [] as Pos[];
  // left
  if (pos.x > 0) {
    res.push({ x: pos.x - 1, y: pos.y });
  }
  // right
  if (pos.x < maxX - 1) {
    res.push({ x: pos.x + 1, y: pos.y });
  }
  // top
  if (pos.y > 0) {
    res.push({ x: pos.x, y: pos.y - 1 });
  }
  // bottom
  if (pos.y < maxY - 1) {
    res.push({ x: pos.x, y: pos.y + 1 });
  }
  return res;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
// console.log(
//   orangesRotting([
//     [2, 1, 1],
//     [1, 1, 0],
//     [0, 1, 1],
//   ])
// );
