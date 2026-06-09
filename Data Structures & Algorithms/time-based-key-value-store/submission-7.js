class TimeMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }

        this.map.get(key).push({
            value,
            timestamp
        });
    }

    get(key, timestamp) {
        const timeStamps = this.map.get(key) || [];

        let l = 0;
        let r = timeStamps.length - 1;
        let res = "";

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (timeStamps[mid].timestamp <= timestamp) {
                res = timeStamps[mid].value;
                l = mid + 1; // search for a later valid timestamp
            } else {
                r = mid - 1;
            }
        }

        return res;
    }
}