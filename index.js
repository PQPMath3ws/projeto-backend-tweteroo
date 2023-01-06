import cors from "cors";
import express from "express";

const server = express();
const PORT = 5000;

server.use(cors());

server.listen(PORT);