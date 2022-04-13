const http = require("http");

// Server configuration
const host = 'localhost';
const port = 8000;


const requestListener = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({
        message: "This is a JSON response"
    }));
};

// Create the server
const server = http.createServer(requestListener);

// Start the Server
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
