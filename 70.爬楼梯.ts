/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n <= 2) return n;

  // f(n) = f(n - 1) + f(n - 2)
  let fn_1 = 1;
  let fn_2 = 2;
  let fn_3: number;

  while (n > 2) {
    fn_3 = fn_1 + fn_2;
    fn_1 = fn_2;
    fn_2 = fn_3;
    n--;
  }

  return fn_3;
};
// @lc code=end

