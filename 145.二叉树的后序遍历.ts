/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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
// function postorderTraversal(root: TreeNode | null): number[] {
//   const res: number[] = [];
//   const postorder = (root: TreeNode | null) => {
//     if (!root) {
//       return;
//     }
//     postorder(root.left);
//     postorder(root.right);
//     res.push(root.val);
//   };
//   postorder(root);
//   return res;
// }

// 迭代
function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];
  const stack: TreeNode[] = [];
  // 标记已访问的右子树
  let visited = null;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.right == null || root.right == visited) {
      res.push(root.val);
      visited = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }
  return res;
}
// @lc code=end
