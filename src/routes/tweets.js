import express from "express";

import users from "../const/users.js";
import tweets from "../const/tweets.js";

const router = express.Router();

router.get("/tweets", (req, res, next) => {
    const { page } = req.query;
    if (page && (Number.isNaN(parseInt(page)) || page <= 0)) return next();
    if (tweets.length === 0) return res.status(200).send(tweets);
    let last10tweets = JSON.parse(JSON.stringify(tweets)).sort((tweet_a, tweet_b) => tweet_a.id > tweet_b.id ? -1 : 1);
    if (!page) last10tweets = last10tweets.slice(0, 10);
    else last10tweets = last10tweets.slice((page - 1) * 10, page * 10);
    last10tweets.forEach(t => {
        delete t.id;
    });
    return res.status(200).send(last10tweets);
});

router.get("/tweets/:USERNAME", (req, res) => {
    if (tweets.length === 0) return res.status(200).send(tweets);
    const { USERNAME } = req.params;
    let usernameTweets = JSON.parse(JSON.stringify(tweets)).sort((tweet_a, tweet_b) => tweet_a.id > tweet_b.id ? -1 : 1).filter(tweet => tweet.username === USERNAME);
    usernameTweets.forEach(t => {
        delete t.id;
    });
    return res.status(200).send(usernameTweets);
});

router.post("/tweets", (req, res, next) => {
    //if (req.headers["content-type"] !== "application/json") return next();
    let { tweet, username } = req.body;
    if (!tweet) return next();
    if (!username) username = req.headers["user"];
    if (!username) return next();
    if (tweet && typeof tweet !== "string") return next();
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