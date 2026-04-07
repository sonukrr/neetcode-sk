class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) { 
        let arr = this.keyStore.get(key) || [];

        let l = 0;
        let r = arr.length - 1;
        let result = "";
        while(l <= r){
            let mid = Math.floor((l + r) / 2);

            if(arr[mid][1] <= timestamp){
                result = arr[mid][0];
                l = mid + 1;
            }else{
                r = mid - 1;
            }

        }

        return result;
    }
}
