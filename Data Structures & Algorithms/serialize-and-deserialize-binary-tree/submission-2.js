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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res  = [];
        dfsSerialize(root);
        console.log(res.join(','));
        return res.join(',');

        function dfsSerialize(node){
            if(!node) return res.push('N');

            res.push(node.val);
            dfsSerialize(node.left);
            dfsSerialize(node.right);
        }
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const vals = data.split(',');
        const i = {val: 0}
        return dfsDeserialize(i);

        function dfsDeserialize(i){
            if(vals[i.val] == 'N') {
                i.val++;
                return null;
            }

            const node = new TreeNode(Number(vals[i.val]));
            i.val++;
            node.left = dfsDeserialize(i);
            node.right = dfsDeserialize(i);

            return node;
        }
    }
}
