/** https://www.nowcoder.com/practice/f96cd47e812842269058d483a11ced4f
 * HJ48 从单向链表中删除指定值的节点
 */
export function parseInput(input: string[]) {
  let arr1 = input[0].split(" ").map(Number);
  let deleNum = arr1[arr1.length - 1];
  let arr2 = arr1.slice(2, arr1.length - 1);
  let arr3 = groupArr(arr2);
  let res = [arr1[1]];
  for (let i = 0; i < arr3.length; i++) {
    let [injectItem, findItem] = arr3[i];
    let index = res.indexOf(findItem);
    res.splice(index + 1, 0, injectItem);
  }
  let delIndex = res.indexOf(deleNum);
  res.splice(delIndex, 1);
  return res.join(" ");
}

function groupArr(arr: number[]) {
  let res: number[][] = [];
  let cur: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    cur.push(arr[i]);
    if (cur.length == 2) {
      res.push(cur);
      cur = [];
    }
  }
  return res;
}

console.log(parseInput(["6 2 1 2 3 2 5 1 4 5 7 2 2"]));
