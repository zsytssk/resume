// let input: string[] = [];
// rl.on("line", function (line) {
//   input.push(line);
// });
// rl.on("close", () => {
//   console.log(parseInput(input));
// });

export function parseInput(input: string[]) {
  const result: string[] = [];
  for (const item of input) {
    result.push(calcDist(item));
  }
  return result.join("\n");
}

function calcDist(path: string) {
  const pathList = path.split(";").filter(Boolean);
  const point = { x: 0, y: 0 };
  for (const item of pathList) {
    const direct = item[0];
    const distance = Number(item.substring(1));
    // NaN
    if (distance !== distance) {
      continue;
    }
    if (direct === "A") {
      point.x -= distance;
    } else if (direct === "S") {
      point.y -= distance;
    } else if (direct === "W") {
      point.y += distance;
    } else if (direct === "D") {
      point.x += distance;
    } else {
      continue;
    }
  }

  return point.x + "," + point.y;
}
