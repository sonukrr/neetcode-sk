class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        var map = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for (let i = 0; i < s.length; i++) {
            let c = s[i];
            if (map[c] == undefined) stack.push(c);
            else {
                let pop = stack.pop();
                if (map[c] != pop)
                    return false;
            }
        }

        return stack.length == 0;
    }
}
