/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 递归
// function swapPairs(head: ListNode | null): ListNode | null {
//   if (head === null || head.next === null) return head;

//   let next = head.next;
//   head.next = swapPairs(next.next);
//   next.next = head;

//   return next;
// };

// 迭代
function swapPairs(head: ListNode | null): ListNode | null {
  let dummyHead = { next: null };
  dummyHead.next = head;
  let temp = dummyHead;

  while (temp.next !== null && temp.next.next !== null) {
    let node1 = temp.next;
    let node2 = temp.next.next;
    node1.next = node2.next;
    node2.next = node1;
    temp.next = node2;
    temp = node1;
  }

  return dummyHead.next;
};
// @lc code=end

