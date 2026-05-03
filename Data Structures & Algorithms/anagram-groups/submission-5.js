class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const lookUpMap = new Map();
        // step 1 - create  a hashmap, Key - char arr stringified, Value - val
        for (const str of strs) {
            const charArr = Array(26).fill(0);

            for (const c of str) {
                let idx = c.charCodeAt(0) - 97;
                charArr[idx] += 1;
            }

            // When converting frequency counts to strings, using a naive format like concatenation without separators can cause collisions.
            // For example, counts [1,11] and [11,1] could produce the same string "111".
            let key = charArr.join(',');
            console.log(key);
            if (!lookUpMap.has(key)) {
                lookUpMap.set(key, [str]);
            } else {
                lookUpMap.get(key).push(str);
            }
        }

        //step 2 - return values
        return [...lookUpMap.values()];
    }
}
