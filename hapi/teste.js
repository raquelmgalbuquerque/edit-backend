const Hapi = require("@hapi/hapi");

const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

// Get all movies
server.route({
  method: "GET",
  path: "/movies",
  handler: (req, h) => {
    return "List all the movies";
  },
});

// Add a new movie to the database
server.route({
  method: "POST",
  path: "/movies",
  handler: (req, h) => {
    return "Add new movie";
  },
});

// Get a single movie
server.route({
  method: "GET",
  path: "/movies/{id}",
  handler: (req, h) => {
    return "Return a single movie";
  },
});

// Update the details of a movie
server.route({
  method: "PUT",
  path: "/movies/{id}",
  handler: (req, h) => {
    return "Update a single movie";
  },
});

// Delete a movie from the database
server.route({
  method: "DELETE",
  path: "/movies/{id}",
  handler: (req, h) => {
    return "Delete a single movie";
  },
});

// Search for a movie
server.route({
  method: "GET",
  path: "/search",
  handler: (req, h) => {
    return "Return search results for the specified term";
  },
});

server.start();
console.log("Server running on %s", server.info.uri);
