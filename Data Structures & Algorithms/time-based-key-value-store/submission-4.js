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
        let arr = [];

        if (this.keyStore.has(key)) {
            arr = this.keyStore.get(key);
        } else {
            arr = [];
        }

        arr.push([value, timestamp]);
        this.keyStore.set(key, arr);

    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) { 
        let arr = this.keyStore.get(key) || [];

        if(arr.length == 0)
            return "";

        let l = 0;
        let r = arr.length - 1;
        let prevMid = 0;
        while(l <= r){
            let mid = Math.floor((l + r) / 2);

            if(arr[mid][1] == timestamp)
                return arr[mid][0];

            if(arr[mid][1] <= timestamp)
                prevMid = mid;

            if(arr[mid][1] <= timestamp){
                l = mid + 1;
            }else{
                r = mid - 1;
            }



        }

        return arr[prevMid][1] <= timestamp ? arr[prevMid][0] : "";
    }
}
