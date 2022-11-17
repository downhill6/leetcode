/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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
// function preorderTraversal(root: TreeNode | null): number[] {
//   if (!root) return [];

//   const res:number[] = [];
//   const preOrder = (root: TreeNode | null) => {
//     if (root) {
//       res.push(root.val);
//       preOrder(root.left);
//       preOrder(root.right);
//     }
//   }
//   preOrder(root);
//   return res;
// };

// 迭代
function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  
  const stack: TreeNode[] = [];
  const res: number[] = [];
  while (root || stack.length) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return res;
}
// @lc code=end

