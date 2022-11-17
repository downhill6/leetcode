/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function reverse(head: ListNode, tail: ListNode) {
  let _head = head;
  let next = head.next;
  while (head !== tail) {
    let temp = head;
    head = next;
    next = next.next;
    head.next = temp;
  }

  return [tail, _head];
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null) return head;

  let hair = new ListNode();
  let prev = hair;
  hair.next = head;

  while (head && head.next) {
    let tail = head;
    for (let i = 1; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        return hair.next;
      }
    }
    const next = tail.next;
    [head, tail] = reverse(head, tail);
    prev.next = head;
    tail.next = next;
    prev = tail;
    head = next;
  } 
  return hair.next;
};
// @lc code=end

