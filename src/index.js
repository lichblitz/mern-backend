import dotenv from "dotenv";
import path from "path";
import express from "express";
import cors from "cors";

import { dbConnect } from "frameworks/mongo";

import Movies from "api/movies";
import { load } from "application/movie-repository";

dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 8080;
const db = process.env.DB_URL || "mongodb://localhost/mern";

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", Movies);

dbConnect(db);

const MOCK = require(path.join(__dirname, "movies.json"));

load(MOCK).catch(() => {
  console.log("Movies already loaded");
});

app.listen(PORT, () => {
  console.log(`Service is listening on ${PORT}`);
});
