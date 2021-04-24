import express from "express";

import { addMovie, getAllMovies, getMoviesBy } from "./actions";

const Movies = express.Router();

Movies.post("/", addMovie);

Movies.get("/", getAllMovies);

Movies.get("/:type", getMoviesBy);

export default Movies;
