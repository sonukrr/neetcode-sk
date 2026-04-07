

class MinStack {
   
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
            this.stack.push(val);
            let min = Math.min(val, this.minStack.length == 0 ? val :this.minStack[this.minStack.length - 1]);
            this.minStack.push(min);
            console.log(this.minStack.toString());
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}