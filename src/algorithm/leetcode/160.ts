export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/** https://leetcode.cn/problems/intersection-of-two-linked-lists/
 * 160. 相交链表
 */
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let arr1: [number, ListNode][] = [];
  let arr2: [number, ListNode][] = [];

  let curA = headA;
  while (true) {
    if (curA === null) {
      break;
    }
    arr1.push([curA.val, curA]);
    curA = curA.next;
  }
  let curB = headB;
  while (true) {
    if (curB === null) {
      break;
    }
    arr2.push([curB.val, curB]);
    curB = curB.next;
  }
  let res: ListNode | null = null;
  for (let i = 0; i < arr1.length; i++) {
    let trialA = arr1[arr1.length - i - 1];
    let trialB = arr2[arr2.length - i - 1];
    if (trialA[1] === trialB?.[1]) {
      res = trialA[1];
    } else {
      break;
    }
  }

  return res;
}
