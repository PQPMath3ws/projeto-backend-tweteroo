import express from "express";

import users from "../const/users.js";
import tweets from "../const/tweets.js";

const router = express.Router();

router.get("/tweets", (req, res) => {
    if (tweets.length === 0) return res.status(200).send(tweets);
    let last10tweets = JSON.parse(JSON.stringify(tweets)).sort((tweet_a, tweet_b) => tweet_a.id > tweet_b.id ? -1 : 1).slice(0, 10);
    last10tweets.forEach(t => {
        delete t.id;
    });
    return res.status(200).send(last10tweets);
});

router.post("/tweets", (req, res, next) => {
    if (req.headers["content-type"] !== "application/json") return next();
    const { tweet, username } = req.body;
    if (!tweet || !username) return next();
    const userFind = users.find(user => user.username === username);
    if (!userFind) return next();
    let sorteredTweets = JSON.parse(JSON.stringify(tweets)).sort((tweet_a, tweet_b) => tweet_a.id > tweet_b.id ? -1 : 1);
    tweets.push({
        id: tweets.length === 0 ? 1 : sorteredTweets[0].id + 1,
        username,
        avatar: userFind.avatar,
        tweet,
    });
    return res.status(201).send("OK");
});

export default router;