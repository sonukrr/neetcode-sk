class Twitter {
    constructor() {
        this.count = 0;
        this.followersMap = new Map();
        this.tweetMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, []);
        }

        var tweets = this.tweetMap.get(userId);
        this.count += 1;
        tweets.push([this.count, tweetId]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    // Heap based approach
    getNewsFeed(userId) {
        
        if(this.followersMap.has(userId)){
            this.followersMap.get(userId).add(userId);
        }else{
            this.followersMap.set(userId, new Set([userId]))
        }

        
        
        const followersIds = this.followersMap.get(userId); 
        

        

        const maxHeap = new MaxPriorityQueue((item) => item[0]);

        for (const uId of followersIds) {  

            console.log(uId)
            
          // for each follower push the last tweet to maxHeap (last is most recent for that user as its count is max)
          if(this.tweetMap.has(uId)){            
            let myTweets = this.tweetMap.get(uId);
            let lastIdx = myTweets.length - 1;
            let [count, tId] = myTweets[lastIdx];
            maxHeap.enqueue([count, tId, uId, lastIdx - 1]);
          }
                 
        }
     

        const res = [];

        while(!maxHeap.isEmpty() && res.length < 10){            
            const [_, tId, oldUserId, oldIndex ] = maxHeap.dequeue();
            res.push(tId);

            
            if(oldIndex >= 0 && this.tweetMap.has(oldUserId)){
                let tweets = this.tweetMap.get(oldUserId);
                let [count, tId] = tweets[oldIndex];

                maxHeap.enqueue([count, tId, oldUserId, oldIndex - 1]);
            }

        }


        return res;



        

    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followersMap.has(followerId)) {
            this.followersMap.set(followerId, new Set());

        }

        let set = this.followersMap.get(followerId);
        set.add(followeeId);


    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        var followersSet = this.followersMap.get(followerId);
        followersSet.delete(followeeId);
    }
}
