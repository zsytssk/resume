/** https://www.nowcoder.com/practice/f9a4c19050fc477e9e27eb75f3bfd49c?
 * HJ41 称砝码
 */
export function parseInput(input: string[]) {
  let weightArr = input[1].split(" ").map((item) => Number(item));
  let numArr = input[2].split(" ").map((item) => Number(item));
  let map = new Map();
  map.set(0, 0);
  for (let i = 0; i < weightArr.length; i++) {
    let arr = [...map.keys()];
    for (let j = 1; j <= numArr[i]; j++) {
      for (let key of arr) {
        let sum = key + j * weightArr[i];
        if (!map.has(sum)) {
          map.set(sum, 0);
        }
      }
    }
  }
  return map.size;
}

function main(s: string) {
  console.log(parseInput(s.split("\n").filter(Boolean)));
}
console.time();
main(`3
10 191 103
6 6 5`);
console.timeEnd();
