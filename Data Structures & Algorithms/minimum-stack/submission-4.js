class MinStack {
    constructor() {
        this.arr = [];
        this.min = [];
        this.len = 0;
    }

    arr;
    min;
    len;

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        
        if(this.len == 0){
            this.min[this.len] = val; 
        }else{
            this.min[this.len] = Math.min(this.min[this.len - 1], val);
        }

        this.arr[this.len] = val;
        
        
        this.len++;
        
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.len > 0){
            this.len--;
        }  
    }

    /**
     * @return {number}
     */
    top() {
        console.log(this.arr, this.min);
        return this.arr[this.len - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.len - 1];
    }
}
