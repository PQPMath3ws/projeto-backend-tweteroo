import express from "express";

const router = express.Router();

import users from "../const/users.js";
import errors from "../const/errors.js";

/*
router.all("/sign-up", (req, res) => {
    if (req.method !== "POST") return res.status(errors[405].code).send(errors[405]);
    if (req.headers["content-type"] !== "application/json") return res.status(errors[415].code).send(errors[415]);
    const { username, avatar } = req.body;
    if (!username || !avatar) return res.status(errors[422].code).send(errors[422]);
    const findedUsername = users.find(user => user.username === username);
    if (findedUsername) return res.status(errors[400].code).send(errors[400]);
    try {
        new URL();
        return res.status(errors["400.1"].code).send(errors["400.1"]);
    } catch (_) {
        return res.status(errors["400.1"].code).send(errors["400.1"]);
    }
});

router.all("/tweets", (req, res) => {
    if (req.method !== "POST") return res.status(errors[405].code).send(errors[405]);
    if (req.headers["content-type"] !== "application/json") return res.status(errors[415].code).send(errors[415]);
    let { tweet, username } = req.body;
    if (!tweet) return res.status(errors[422].code).send(errors[422]);
    if (!username) username = req.headers["User"];
    if (!username) return res.status(errors[422].code).send(errors[422]);
    return res.status(errors[401].code).send(errors[401]);
});
*/

router.all("/sign-up", (req, res) => {
    if (req.method !== "POST") return res.status(405).send(errors[405]);
    if (req.headers["content-type"] !== "application/json") return res.status(415).send(errors[415]);
    const { username, avatar } = req.body;
    if (!username || !avatar) return res.status(422).send(errors[422]);
    const findedUsername = users.find(user => user.username === username);
    if (findedUsername) return res.status(400).send(errors[400]);
    try {
        new URL();
        return res.status(400).send(errors["400.1"]);
    } catch (_) {
        return res.status(400).send(errors["400.1"]);
    }
});

router.all("/tweets", (req, res) => {
    if (req.method !== "POST") return res.status(405).send(errors[405]);
    if (req.headers["content-type"] !== "application/json") return res.status(415).send(errors[415]);
    let { tweet, username } = req.body;
    if (!tweet) return res.status(422).send(errors[422]);
    if (!username) username = req.headers["user"];
    if (!username) return res.status(422).send(errors[422]);
    return res.status(401).send(errors[401]);
});

router.all("*", (req, res) => {
    return res.status(errors[404].code).send(errors[404]);
});

export default router;