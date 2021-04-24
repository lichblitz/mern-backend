import { create } from "application/movie-repository";

export const addMovie = async (req, res) => {
  const movie = req.body;
  const response = await create(movie);

  res.json(response);
};
