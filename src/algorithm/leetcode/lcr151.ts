class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/** https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
 * LCR 151. 彩灯装饰记录 III
 */

export function decorateRecord(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  let res: number[][] = [];
  res.push([root.val]);
  let leftArr = decorateRecord(root?.left);
  let rightArr = decorateRecord(root?.right);
  let len = Math.max(leftArr.length, rightArr.length);
  let reverse = true;
  for (let i = 0; i < len; i++) {
    let arr: number[] = [];
    if (leftArr[i]?.length) {
      arr.push(...leftArr[i]);
    }
    if (rightArr[i]?.length) {
      arr.push(...rightArr[i]);
    }
    if (reverse) {
      res.push(arr);
    } else {
      res.push(arr.reverse());
    }
    reverse = !reverse;
  }
  return res;
}
