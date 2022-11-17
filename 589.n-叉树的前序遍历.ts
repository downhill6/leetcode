/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
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
// function preorder(root: Node | null): number[] {
//   const res:number[] = [];
//   const porder = (root: Node | null) => {
//     if (root) {
//       res.push(root.val);
//       for (let i = 0; i < root.children.length; i++) {
//         porder(root.children[i]);
//       }
//     }
//   }
//   porder(root);
//   return res;
// };

// 迭代
function preorder(root: Node | null): number[] {
  if (!root) return [];

  const res:number[] = [];
  const stack: Node[] = [root];

  while (stack.length) {
    const cur = stack.pop();
    res.push(cur.val);

    // 结合 push，倒叙将 children 存入栈中，保证节点的弹出书序与期望的一致
    for (let i = cur?.children.length - 1; i >= 0; i--) {
      stack.push(cur.children[i]);
    }

  }

  return res;
};
// @lc code=end

