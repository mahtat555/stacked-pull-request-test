const http = require("http");

const { notFound404, inverseView } = require("./api/views");
const { useJson } = require("./api/midlwares");

// Server configuration
const host = 'localhost';
const port = 8000;


const requestListener = async (req, res) => {
  // Use JSON Format
  await useJson(req, res);

  switch (req.url) {
    case "/inverse":
      inverseView(req, res);
      break

    default:
      notFound404(req, res);
  }
};

// Create the server
const server = http.createServer(requestListener);

// Start the Server
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
