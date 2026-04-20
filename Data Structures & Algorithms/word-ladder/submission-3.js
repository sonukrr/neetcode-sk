class Solution {
    ladderLength(beginWord, endWord, wordList) {

        const map = new Map();
        map.set(beginWord, []);

        for (const word of wordList) {
            map.set(word, []);
        }

        if (!map.has(endWord)) return 0;

        // build UNDIRECTED graph
        const words = Array.from(map.keys());

        for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                if (isTransformPossible(words[i], words[j])) {
                    map.get(words[i]).push(words[j]);
                    map.get(words[j]).push(words[i]);
                }
            }
        }

        // BFS
        let q = [beginWord];
        let visited = new Set([beginWord]);
        let count = 1;

        while (q.length > 0) {
            let size = q.length;

            for (let i = 0; i < size; i++) {
                let node = q.shift();

                if (node === endWord) return count;

                for (const next of map.get(node)) {
                    if (!visited.has(next)) {
                        visited.add(next);   // mark early ✅
                        q.push(next);
                    }
                }
            }

            count++; // increment AFTER level ✅
        }

        return 0;

        function isTransformPossible(w1, w2) {
            let diff = 0;
            for (let i = 0; i < w1.length; i++) {
                if (w1[i] !== w2[i]) diff++;
            }
            return diff === 1;
        }
    }
}