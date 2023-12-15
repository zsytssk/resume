/**
 * https://www.nowcoder.com/practice/119bcca3befb405fbe58abe9c532eb29
 * 坐标移动
 */

let regex = /^(A|D|S|W)\d{1,2}$/;
export function parseInput(input: string) {
  const tokens = input.split(";").filter((item) => {
    return regex.test(item);
  });

  let curP = { x: 0, y: 0 };
  for (const token of tokens) {
    let dir = token.charAt(0);
    let num = parseInt(token.replace(dir, ""));
    switch (dir) {
      case "A":
        curP.x -= num;
        continue;
      case "D":
        curP.x += num;
        continue;
      case "W":
        curP.y += num;
        continue;
      case "S":
        curP.y -= num;
        continue;
    }
  }

  return `${curP.x},${curP.y}`;
}
