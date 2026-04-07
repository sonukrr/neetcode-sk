class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const res = [];
        let i = 0;
        let j = numbers.length - 1;

        while(i < j){
            let currSum = numbers[i] + numbers[j];
            if(currSum == target)
                return [i+1, j+1];

            if(currSum > target)
                j--;
            else i++;
        }

        return;
    }
}
