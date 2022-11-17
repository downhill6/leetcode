/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let len = digits.length - 1;

  while (len >= 0) {
    let last = digits[len];
    last++;

    if (last < 10) {
      digits[len] = last;
      return digits;
    } else {
      digits[len] = 0;
    }
    len--;
  }

  // 所有的位数都进位了，在前面加 1
  digits[len] = 0;
  digits.unshift(1);
  return digits;
};
// @lc code=end

