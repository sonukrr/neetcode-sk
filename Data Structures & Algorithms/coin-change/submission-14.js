class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        if (amount == 0) return 0;

        const q = new Queue();
        q.push([0, 0]);

        const visited = new Set();


        while (!q.isEmpty()) {
            let size = q.size();

            for (let i = 0; i < size; i++) {
                let [amt, count] = q.pop();
                if (amt == amount) {
                    return count;
                }


                for (const coin of coins) {
                    let newAmt = amt + coin;

                    if (newAmt <= amount && !visited.has(newAmt)) {
                        visited.add(newAmt);
                        q.push([newAmt, count + 1]);
                    }
                }
            }
        }

        return -1;


    }
}
