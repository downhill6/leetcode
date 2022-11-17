/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null || list2 === null) return list1 || list2;

  // 选出小的那个节点做开头
  if (list1.val > list2.val) {
    let temp = list1;
    list1 = list2;
    list2 = temp;
  }

  let head = list1;
  while (list1.next) {
    let next = list1.next;
    if (next.val > list2.val) {
      list1.next = list2;
      list2 = next;
    }

    list1 = list1.next;
  }
  list1.next = list2;

  return head;
};
// @lc code=end

