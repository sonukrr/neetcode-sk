class Solution {
  ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord) || beginWord == endWord) return 0;

    const patterns = new Map();

    // create the patterns map
    for (let i = 0; i < wordList.length; i++) {
      let word = wordList[i];
      for (let j = 0; j < word.length; j++) {
        let str = word.slice(0, j) + "*" + word.slice(j + 1);
        if (!patterns.has(str)) patterns.set(str, [word]);
        else patterns.get(str).push(word);
      }
    }

    console.log(patterns);

    // BFS shortest path
    const q = new Queue([beginWord]);
    const visit = new Set([beginWord]);
    let len = 0;

    while (!q.isEmpty()) {
        console.log(q)
      len++;
      let size = q.size();

      for (let i = 0; i < size; i++) {
        const word = q.pop();
        console.log(word)

        if (word == endWord) {
          return len;
        }

        for (let j = 0; j < word.length; j++) {
          let str = word.slice(0, j) + "*" + word.slice(j + 1);
          
          const neighbors = patterns.get(str) || [];
          console.log(neighbors)

          for (const nei of neighbors) {
            if (!visit.has(nei)) {
                console.log(nei)
              visit.add(nei);
              q.push(nei);
            }
          }

          patterns.set(str, []);
        }
      }
    }

    return 0;
  }
}
