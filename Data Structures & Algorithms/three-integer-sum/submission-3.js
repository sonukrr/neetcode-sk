class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((n1, n2) => n1 - n2);

        for (let i = 0; i < nums.length; i++) {
            if(i > 0 && nums[i] == nums[i-1]) continue;

            let target = -nums[i];

            // 2-pointer 
            let l = i+1;
            let r = nums.length - 1;
            while (l < r) {

                if (i == l) {
                    l++;
                    continue;
                }
                if (i == r) {
                    r--;
                    continue;
                }


                let sum = nums[l] + nums[r];

                if (sum > target)
                    r--;
                else if (sum < target)
                    l++;
                else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while(l<r && nums[l] == nums[l-1])
                        l++;
                }

            }

        }


        return res;
    }
}
