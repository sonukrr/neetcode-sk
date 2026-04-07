/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        
        const res = [];
        var queue = [root];

        while(queue.length > 0){
            const level = [];
            let len = queue.length;
            while(len > 0){
                const pop = queue.shift();
                pop.left && level.push(pop.left);
                pop.right && level.push(pop.right);

                if(len == 1){
                    // last element
                    res.push(pop.val);
                }
                len--;
            }

            queue = [...queue, ...level];
            
        }

        return res;
    }
}
