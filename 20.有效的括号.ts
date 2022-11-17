/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let stack:string[] = [];

  const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    if (cur === '(' || cur === '[' || cur === '{') {
      stack.push(cur);
    } else {
      let p = stack.pop();
      if (obj[p] !== cur) return false;
    }
  }

  if (stack.length === 0) return true;
  return false;
};
// @lc code=end

