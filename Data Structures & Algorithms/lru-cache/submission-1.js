class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(cap) {
        this.map = new Map();
        this.capacity = cap;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)){
            const value = this.map.get(key);
            this.map.delete(key);

            this.map.set(key, value);
        }

        return this.map.has(key) ? this.map.get(key) :  -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.map.delete(key);
        }else if (this.map.size == this.capacity){
            const lruKey = this.map.keys().next().value; // returns the 1st key
            this.map.delete(lruKey);
        }

        this.map.set(key, value);
    }
}
