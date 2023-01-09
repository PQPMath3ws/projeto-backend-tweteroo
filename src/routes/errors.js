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
    if (username && typeof username !== "string") res.status(errors["400.4"].code).send(errors["400.4"]);
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
    if (req.method === "GET") if (req.query["page"] && (Number.isNaN(parseInt(req.query["page"])) || req.query["page"] <= 0)) return res.status(errors["400.2"].code).send(errors["400.2"]);;
    if (req.method !== "POST") return res.status(errors[405].code).send(errors[405]);
    if (req.headers["content-type"] !== "application/json") return res.status(errors[415].code).send(errors[415]);
    let { tweet, username } = req.body;
    if (!tweet) return res.status(errors[422].code).send(errors[422]);
    if (!username) username = req.headers["User"];
    if (!username) return res.status(errors[422].code).send(errors[422]);
    if (tweet && typeof tweet !== "string") res.status(errors["400.3"].code).send(errors["400.3"]);
    return res.status(errors[401].code).send(errors[401]);
});
*/

router.all("/sign-up", (req, res) => {
    if (req.method !== "POST") return res.status(405).send(errors[405]);
    if (req.headers["content-type"] !== "application/json") return res.status(415).send(errors[415]);
    const { username, avatar } = req.body;
    if (!username || !avatar) return res.status(400).send(errors["400.3"]);
    if (username && typeof username !== "string") return res.status(400).send(errors["400.5"]);
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
    if (req.method === "GET") if (req.query["page"] && (Number.isNaN(parseInt(req.query["page"])) || req.query["page"] <= 0)) return res.status(400).send(errors["400.2"]);;
    if (req.method !== "POST") return res.status(405).send(errors[405]);
    if (req.headers["content-type"] !== "application/json") return res.status(415).send(errors[415]);
    let { tweet, username } = req.body;
    if (!tweet) return res.status(400).send(errors["400.3"]);
    if (!username) username = req.headers["user"];
    if (!username) return res.status(400).send(errors["400.3"]);
    if (tweet && typeof tweet !== "string") return res.status(400).send(errors["400.4"]);
    return res.status(401).send(errors[401]);
});

router.all("*", (req, res) => {
    //return res.status(errors[404].code).send(errors[404]);
    return res.status(404).send(errors[404]);
});

export default router;