const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const url = req.url;
    if (url === "/form") {
      res.setHeader("content-Type", "text/html");

      res.write("<htm>");
      res.write("<head><title>Send message</title></head>");
      res.write(
        "<body><form action='/success' method='POST'><span> Name:</span><input type='text' name='message'/><button type='submit'>send</button></form></body>"
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/success" && req.method === "POST") {
      const body = [];
      req.on("data", (chunks) => {
        body.push(chunks);
        console.log(body);
      });
      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")[1];
        fs.writeFileSync("PersonName.txt", message);

        console.log(message);
      });
      res.statusCode = 201;
      res.setHeader("Location", "/success");
      res.write("successful");
      return res.end();
    }
    res.write("after if block");
    res.end();
  })
  .listen(8081);
console.log("Server running at http://127.0.0.1:8081/");
