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
    getNewsFeed(userId) {

        const followersIds = Array.from(this.followersMap.get(userId) || []);

        let allTweets = [...(this.tweetMap.get(userId) || [])];
        for (const fId of followersIds) {
            if (fId !== userId) {
                let tweets = this.tweetMap.get(fId);
                allTweets = [...allTweets, ...tweets];
            }

        }

        allTweets.sort((t1, t2) => t2[0] - t1[0]);



        return allTweets.map(el => el[1]).slice(0, 10);

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
