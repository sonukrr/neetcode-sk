class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles);

        let minSpeed = max;

        let l = 1,
        r = max;

        while(l <= r){
            let k = Math.floor((l + r) / 2); // speed

            let hrs = 0;
            for(const p of piles){
                hrs += Math.ceil(p / k);
            }

            if(hrs <= h){
                minSpeed = k;
                r = k - 1;
            }else{
                l = k + 1;
            }

            

        }

        return minSpeed;
    }
}
