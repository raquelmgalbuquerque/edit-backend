import Hapi from "@hapi/hapi";
import logger from "./lib/logger";
import authBasic from "./lib/auth-basic";
import hello from "./routes/hello";
import hello_exercise from "./routes/hello_exercise";
import movies from "./routes/movies";
import health from "./routes/health";
import validated from "./routes/validated";
import restricted from "./routes/restricted";

/**
 * Initializes the server (starts the caches, finalizes plugin registration) but does not start
 * listening on the connection port ({@link Hapi.Server.initialize more}). Use this to get a server
 * instance for tests ({@link https://hapi.dev/tutorials/testing/?lang=en_US more}).
 *
 * @param port {@link Hapi.ServerOptions.port}
 * @returns singleton instance of server
 */
export default async (
  options?: Hapi.ServerOptions
): Promise<Readonly<Hapi.Server>> => {
  const server = Hapi.server(options);

  await Promise.all([server.register(logger), server.register(authBasic)]);

  await Promise.all([
    server.register(hello, { routes: { prefix: "/api/hello" } }),
    server.register(hello_exercise, {
      routes: { prefix: "/api/hello_exercise" },
    }),
    server.register(movies, { routes: { prefix: "/api/movies" } }),
    server.register(health, { routes: { prefix: "/api/health" } }),
    server.register(validated, { routes: { prefix: "/api/validated" } }),
    server.register(restricted, { routes: { prefix: "/api/restricted" } }),
  ]);

  await server.initialize();

  return server;
};
