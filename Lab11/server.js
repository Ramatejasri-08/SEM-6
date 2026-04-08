const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write("Hello bro! Server is running");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});