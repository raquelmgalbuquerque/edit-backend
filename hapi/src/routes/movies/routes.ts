import type { ServerRoute } from "@hapi/hapi";
import { hello } from "./service";

/**
 * @handle `GET /`
 */
const getAllMovies = Object.freeze<ServerRoute>({
  method: "GET",
  path: "/",
  handler: (_re) => "from GET /",
});

/**
 * @handle `POST /`
 */
const postMovie = Object.freeze<ServerRoute>({
  method: "POST",
  path: "/",
  handler: (_re) => "from POST /",
});

/**
 * @handle `GET /`
 */
const getMovie = Object.freeze<ServerRoute>({
  method: "GET",
  path: "/{id}",
  handler: (_re) => "from GET /{id}",
});

/**
 * @handle `PUT /{id}`
 */
const putMovie = Object.freeze<ServerRoute>({
  method: "PUT",
  path: "/{id}",
  handler: (_re) => "from PUT /{id}",
});

/**
 * @handle `DELETE /{id}`
 */
const deleteMovie = Object.freeze<ServerRoute>({
  method: "DELETE",
  path: "/{id}",
  handler: (_re) => "from DELETE /{id}",
});

/**
 * @handle `GET /`
 */
const searchMovie = Object.freeze<ServerRoute>({
  method: "GET",
  path: "/search",
  handler: (_re) => "from GET /search",
});

/**
 * Routes of the plugin `hello`
 */
export default [
  getAllMovies,
  postMovie,
  getMovie,
  putMovie,
  deleteMovie,
  searchMovie,
];
