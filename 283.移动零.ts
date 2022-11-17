/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  /**
   * left 如果是 0 就停下，非 0 就右移
   * right 是 0 就继续右移，非 0 就把当前元素和 left 交换
   * */
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[left] !== 0) {
      left++;
      right = left;
      continue;
    }

    if (nums[right] === 0) {
      right++;
    } else {
      nums[left] = nums[right];
      if (left !== right) {
        nums[right] = 0;
      }
      right++;
    }
  }
}
// @lc code=end
