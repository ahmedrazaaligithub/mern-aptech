const http = require("http");
require("dotenv").config();
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  })
  .listen(process.env.PORT || 5000, () =>
    console.log(`Server running o port http://localhost:${process.env.PORT||5000}`)
  );
