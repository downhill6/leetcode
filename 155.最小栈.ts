/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
    _stack: number[][];
    constructor() {
        this._stack = [];
    }

    push(val: number): void {
        if (this._stack.length === 0) {
            this._stack.push([val, val]);
        } else {
            this._stack.push([val, Math.min(val, this._stack[this._stack.length - 1][1])]);
        }
    }

    pop(): void {
        this._stack.pop();
    }

    top(): number {
        return this._stack[this._stack.length - 1][0];
    }

    getMin(): number {
        return this._stack[this._stack.length - 1][1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

