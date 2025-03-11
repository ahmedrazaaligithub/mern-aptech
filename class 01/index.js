const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  }).listen(process.env.PORT || 5000, () => console.log(`Server running o port http://${process.env.PORT}`));
