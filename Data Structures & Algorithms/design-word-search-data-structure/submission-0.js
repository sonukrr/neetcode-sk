class TrieNode{
    constructor(){
        this.children = Array(26).fill(null);
        this.isEnd = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        var node = this.root;

        for(const c of word){
            let idx = c.charCodeAt(0) - 97;
            if(!node.children[idx]){
                node.children[idx] = new TrieNode();
            }

            node = node.children[idx];
        }

        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(0, word, this.root);
    }

    getIndex(c){
        return c.charCodeAt(0) - 97;
    }

    dfs(j, word, node){
        if(!node) return false;
        if(j == word.length) return node.isEnd;

        let c = word[j];

        // char case
        if(c != '.'){
            const idx = this.getIndex(c);
            return this.dfs(j + 1, word, node.children[idx]);
        }

        // wildcard case
        // dfs for all childrens
        for(const child of node.children){
            if(child && this.dfs(j + 1, word, child))
                return true; 
        }

        return false;
    }
}
