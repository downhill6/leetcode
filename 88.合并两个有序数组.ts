/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) {
    return;
  }

  // 反向双指针
  let l1 = m - 1;
  let l2 = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (nums1[l1] > nums2[l2]) {
      nums1[i] = nums1[l1];
      l1--;
    } else {
      nums1[i] = nums2[l2];
      l2--;
    }

    if (l2 < 0) break;
  }
};
// @lc code=end

