import express from "express";

import users from "../const/users.js";

const router = express.Router();

router.post("/sign-up", (req, res, next) => {
    if (req.headers["content-type"] !== "application/json") return next();
    const { username, avatar } = req.body;
    if (!username || !avatar) return next();
    //add validation here
    users.push({username, avatar});
    return res.status(201).send("OK");
});

export default router;