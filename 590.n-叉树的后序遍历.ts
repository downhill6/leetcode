/*
 * @lc app=leetcode.cn id=590 lang=typescript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

// 递归
// function postorder(root: Node | null): number[] {
//   const res:number[] = [];
//   const porder = (root: Node | null) => {
//     if (root) {
//       for (let i = 0; i < root.children.length; i++) {
//         porder(root.children[i]);
//       }
//       res.push(root.val);
//     }
//   }
//   porder(root);
//   return res;
// };

// 迭代
function postorder(root: Node | null): number[] {
  if (!root) return [];

  const res:number[] = [];
  const stack: Node[] = [root];

  while (stack.length) {
    const cur = stack.pop();
    for (let i = 0; i < cur?.children.length; i++) {
      stack.push(cur.children[i]);
    }
    res.push(cur.val);
  }

  res.reverse();
  return res;
};
// @lc code=end

