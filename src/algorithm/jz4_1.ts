/** https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13
 * JZ4 二维数组中的查找
 * 默认的indexOf很快（c++代码），所以这个测试下面代码就通过另
 */
export function Find(target: number, array: number[][]): boolean {
  // let n = array[0].length;
  // let m = array.length;
  for (const item of array) {
    if (item.indexOf(target) !== -1) {
      return true;
    }
  }
  return false;
}
