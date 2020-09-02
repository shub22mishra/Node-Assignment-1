const fs = require("fs");
const getdata = () => {
  var text = fs.readFileSync("data.txt", "utf8");
  return text.length;
};
console.log(getdata);

module.exports = getdata;
