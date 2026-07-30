class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(houses) {
        if (houses.length == 0) return 0;
        if (houses.length == 1) return houses[0];

        return Math.max(helper(houses.slice(0, -1)), helper(houses.slice(1)));

        // normal house robber probelm
        function helper(nums) {
            let rob1 = 0;
            let rob2 = 0;

            for (const n of nums) {
                let maxP = Math.max(n + rob1, rob2);
                rob1 = rob2;
                rob2 = maxP;
            }

            return rob2;
        }
    }
}
