/**
 * https://www.nowcoder.com/practice/de044e89123f4a7482bd2b214a685201
 * HJ8 合并表记录
 * @param input
 * @returns
 */
export function parseInput(input: string[]) {
  let arr = input.slice(1, input.length).map((item) =>
    item.split(" ").map((item) => {
      return parseInt(item);
    })
  );
  // console.log(`test:>`, arr)
  let map = {};
  for (const [key, val] of arr) {
    if (map[key]) {
      map[key] += val;
    } else {
      map[key] = val;
    }
  }
  let str = "";
  for (const key in map) {
    str += `${key} ${map[key]}`;
    str += "\n";
  }
  return str;
}
