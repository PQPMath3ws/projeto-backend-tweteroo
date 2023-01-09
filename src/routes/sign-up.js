import express from "express";

import users from "../const/users.js";

const router = express.Router();

router.post("/sign-up", (req, res, next) => {
    if (req.headers["content-type"] !== "application/json") return next();
    const { username, avatar } = req.body;
    if (!username || !avatar) return next();
    if (username && typeof username !== "string") return next();
    const findedUsername = users.find(user => user.username === username);
    if (findedUsername) return next();
    try {
        new URL(avatar);
        if (avatar.split("?")[0].match(/\.(jpeg|jpg|gif|png)$/) === null) return next();
        users.push({username, avatar});
        return res.status(201).send("OK");
    } catch (_) {
        return next();
    }
});

export default router;