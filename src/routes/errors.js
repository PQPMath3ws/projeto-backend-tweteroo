import express from "express";

const router = express.Router();

import errors from "../const/errors.js";

router.all("/sign-up", (req, res) => {
    if (req.method !== "POST") return res.status(errors[405].code).send(errors[405]);
    if (req.headers["content-type"] !== "application/json") return res.status(errors[415].code).send(errors[415]);
    const { username, avatar } = req.body;
    if (!username || !avatar) return res.status(errors[422].code).send(errors[422]);
});

router.all("*", (req, res) => {
    return res.status(errors[404].code).send(errors[404]);
});

export default router;