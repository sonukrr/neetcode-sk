class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let cost1 = 0;
        let cost2 = 0;

        for (const c of cost) {
            let temp = c + Math.min(cost1, cost2);
            cost1 = cost2;
            cost2 = temp;
        }

        return Math.min(cost1, cost2);
    }
}
