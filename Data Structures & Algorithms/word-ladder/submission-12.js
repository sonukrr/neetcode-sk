class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {

        if (!wordList.includes(endWord)) return 0;

        const adj = {};

        for (const word of wordList) {
            adj[word] = [];
        }

        // Build graph
        for (const word of wordList) {
            for (const key in adj) {
                if (singleCharDiff(word, key)) {
                    adj[word].push(key);
                }
            }
        }

        console.log(adj)

        const q = new Queue();
        const visited = new Set();

        // Multi-source start
        for (const word of wordList) {
            if (singleCharDiff(beginWord, word)) {
                q.push(word);
                visited.add(word);
            }
        }

        let level = 2;

        while (!q.isEmpty()) {
            const size = q.size();

            for (let i = 0; i < size; i++) {
                const word = q.pop();

                if (word === endWord) {
                    return level;
                }

                for (const nei of adj[word]) {
                    if (!visited.has(nei)) {
                        visited.add(nei);
                        q.push(nei);
                    }
                }
            }

            level++;
        }

        return 0;

        function singleCharDiff(a, b) {
            let diff = 0;

            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) diff++;
                if (diff > 1) return false;
            }

            return diff === 1;
        }
    }
}