/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start

function revese(nums: number[], start: number, end: number) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = k % nums.length;
  revese(nums, 0, nums.length - 1);
  revese(nums, 0, n - 1);
  revese(nums, n, nums.length - 1);
};
// @lc code=end

