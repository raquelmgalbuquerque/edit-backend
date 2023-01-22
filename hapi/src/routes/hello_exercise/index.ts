import type { Plugin } from "@hapi/hapi";
import routes from "./routes";

/**
 * `hello_exercise@1.0.0`
 * Recommended route prefix 'api/hello_exercise'
 */
export default Object.freeze<Plugin<void>>({
  name: "hello_exercise",
  version: "1.0.0",
  register: (server) => server.route(routes),
});
