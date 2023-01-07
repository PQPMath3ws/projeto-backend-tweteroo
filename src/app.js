import cors from "cors";
import express from "express";

import SignUp from "./routes/sign-up.js";
import Tweets from "./routes/tweets.js";
import Errors from "./routes/errors.js";

const server = express();
const PORT = 5000;

server.use(cors());
server.use(express.json());

server.use(SignUp);
server.use(Tweets);
server.use(Errors);

server.listen(PORT);