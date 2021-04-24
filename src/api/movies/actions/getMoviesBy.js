import { getAllBy } from "application/movie-repository";

export const getMoviesBy = async (req, res) => {
  const type = req.params.type;

  const movies = await getAllBy({ type });
  if (movies.length === 0) {
    res.statusCode = 404;
  }
  res.json(movies);
};
