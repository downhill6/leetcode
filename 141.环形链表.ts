/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false;
  let fast = head.next;
  let slow = head;
  while (fast && fast.next) {
    if (slow === fast) return true;
    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
};
// @lc code=end

