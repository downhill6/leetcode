/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
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
// function levelOrder(root: Node | null): number[][] {
//   const res:number[][] = [];
//   if (!root) return res;

//   const dfs = (root: Node, level: number) => {
//     if (Array.isArray(res[level])) {
//       res[level].push(root.val);
//     } else {
//       res[level] = [root.val];
//     }

//     root.children.map(node => dfs(node, level + 1));
//   }
//   dfs(root, 0);

//   return res;
// };

// 迭代
function levelOrder(root: Node | null): number[][] {
  const res:number[][] = [];
  if (!root) return res;

  const queue = [root];
  while (queue.length) {
    const count = queue.length;
    const temp = [];
    for (let i = 0; i < count; i++) {
      const cur = queue.shift();
      temp.push(cur.val);
      cur.children.forEach(node => queue.push(node));
    }
    res.push(temp);
  }

  return res;
};

// @lc code=end

