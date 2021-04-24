import { Schema, model } from "frameworks/mongo";
import Movie from "domain/movie";

const movieSchema = new Schema({
  title: { type: String, unique: true },
  year: Number,
  type: String,
});
movieSchema.loadClass(Movie);

export const MovieRepository = model("Movie", movieSchema);

export const create = async (movie) => {
  const newMovie = new MovieRepository(movie);
  return await newMovie.save();
};

export const getAll = async () => {
  const movies = await MovieRepository.find();
  return movies;
};

export const getAllBy = async (filter) => {
  const movies = await MovieRepository.find(filter);
  return movies;
};

export const load = async (movies) => {
  const inserted = await MovieRepository.insertMany(movies);
  return inserted;
};
