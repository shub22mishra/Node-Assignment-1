const http = require("http");
const data = require("./Module/Module.js");
const fs = require("fs");
const server = http.createServer((req, res) => {
  fs.writeFile("resultLog.txt", data(), (err) => {
    if (err) {
      console.log("file not found");
    }
    console.log(data);
  });
  res.write("shubhammishra");
  res.end();
});
server.listen(5000, () => {
  console.log("running on port 5000");
});
