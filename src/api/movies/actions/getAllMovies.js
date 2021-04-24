import { getAll } from "application/movie-repository";

export const getAllMovies = async (req, res) => {
  const movies = await getAll();
  if (movies.length === 0) {
    res.statusCode = 404;
  }
  res.json(movies);
};
