class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = [];
        let count = {};
        for(const n of nums){
            count[n] = (count[n] || 0) + 1;
        }

        //reverse the object
        count = Object.entries(count).map(([num, freq]) => [freq, num]);

        var arr = new Array(nums.length + 1).fill().map(()=> []);

        for(const [freq, num] of count){
            arr[freq].push(num);
        }

        // get the top 'k' el from right end
        for(let i=arr.length-1; i>0; i--){
            if(k == 0)
                break;
            if(arr[i].length > 0){
                for(const el of arr[i]){
                    if(k != 0){
                        res.push(el);
                        k--;
                    }
                    
                }
                
            }
            
        }

        return res;

    }
}