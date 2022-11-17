/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let t = target - nums[i];
    if (map.has(t)) {
      return [map.get(t), i];
    }
    map.set(nums[i], i);
  }
};
// @lc code=end

