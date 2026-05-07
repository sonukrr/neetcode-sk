class Solution {
  threeSum(nums) {
    nums.sort((a, b) => a - b);

    const res = [];

    const obj = {};
    for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] = i;
    }

    let i = 0;

    while (i < nums.length) {
      let num1 = nums[i];

      // classic 2 sum
      let j = i + 1;
      while (j < nums.length) {
        let diff = 0 - (num1 + nums[j]);
        let k = obj[diff];
        if (k != undefined && k > i && k > j) {
          res.push([nums[i], nums[j], nums[k]]);
        }
        while(nums[j] == nums[j + 1])
          j++;
        
        j++;
      }

      while (nums[i] == nums[i + 1]) {
        i++;
      }

      i++;
    }

    return res;
  }
}