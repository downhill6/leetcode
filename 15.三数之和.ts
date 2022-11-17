/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);

  const len = nums.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return result;
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 双指针
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      let target = nums[i] + nums[l] + nums[r];

      if (target < 0) l++;
      if (target > 0) r--;
      if (target === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        // 去重
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return result;
};
// @lc code=end