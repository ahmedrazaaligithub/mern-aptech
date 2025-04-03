const http = require("http");
require("dotenv").config();
const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h2>Home Page</h2>
        <ul>
        <li><a href="/about">about</a></li>
        <li><a href="/contact">contact</a></li>
        <li><a href="/location">location</a></li>
        </ul>
        `);
      res.end();
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h2>About Page</h2>
        <ul>
        <li><a href="/">home</a></li>
        <li><a href="/contact">contact</a></li>
        <li><a href="/location">location</a></li>
        </ul>
        `);
      res.end();
    } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h2>Contact Page</h2>
        <ul>
        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/location">location</a></li>
        </ul>
        `);
      res.end();
    } else if (req.url === "/location") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h2>Location Page</h2>
        <ul>
        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/contact">contact</a></li>
        </ul>
        `);
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h3>page not found</h3>");
      res.end();
    }
  })
  .listen(process.env.PORT || 5000, () =>
    console.log(
      `Server running o port http://localhost:${process.env.PORT || 5000}`
    )
  );
