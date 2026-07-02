class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let prices = new Array(n).fill(Infinity);
        prices[src] = 0;

        for(let i = 0; i <= k; i++){
            let tempPrices = [...prices];
            for(let [u,v,w] of flights){
                let cost = prices[u] + w;
                if(cost < tempPrices[v]){
                    tempPrices[v] = cost;
                }
            }

            prices = tempPrices;
        }

        return prices[dst] !== Infinity ? prices[dst] : -1;
    }
}
