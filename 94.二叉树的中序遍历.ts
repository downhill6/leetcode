/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 递归
// function inorderTraversal(root: TreeNode | null): number[] {
//   const res: number[] = [];
//   const inorder = (root: TreeNode | null) => {
//     if (!root) {
//       return;
//     }
//     inorder(root.left);
//     res.push(root.val);
//     inorder(root.right);
//   };
//   inorder(root);
//   return res;
// }

// 迭代，手动维护栈
function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];
  const stack: TreeNode[] = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
}


// @lc code=end
