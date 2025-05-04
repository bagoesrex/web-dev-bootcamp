const fs = require("fs");

// fs.writeFile("message.txt", "Hello dari nodeJS!", (err) => {
//     if(err) throw err;
//     console.log("The file have been saved!");
// })

fs.readFile("./message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
