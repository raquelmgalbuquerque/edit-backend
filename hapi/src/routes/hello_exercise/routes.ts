import type { ServerRoute } from "@hapi/hapi";
import { hello } from "./service";

/**
 * @handle `GET /`
 */
const getDefault = Object.freeze<ServerRoute>({
  method: "GET",
  path: "/",
  handler: (_req) => hello(),
});

/**
 * @handle `GET /`
 */
const getAnother = Object.freeze<ServerRoute>({
  method: "GET",
  path: "/with-content-type",
  handler: async (_req, h) => {
    return h.response(hello()).header("content-type", "text/plain");
  },
});

/**
 * Routes of the plugin `hello`
 */
export default [getDefault, getAnother];
