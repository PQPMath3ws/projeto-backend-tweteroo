import express from "express";

import tweets from "../const/tweets.js";

const router = express.Router();

router.get("/tweets", (req, res) => {
    if (tweets.length === 0) return res.status(200).send([]);
    const last10tweets = tweets.sort((tweet_a, tweet_b) => tweet_a.id > tweet_b.id ? -1 : 1).slice(0, 10);
    for (let filteredTweet in last10tweets) {
        delete filteredTweet.id;
    }
    return res.status(200).send(last10tweets);
});

export default router;