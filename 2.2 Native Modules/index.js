const fs = require("fs");

fs.writeFile("textCuong.txt", "Cuong xin chao", (err) => {
    if(err) throw err;
    console.log("the file has been saved!")
});

fs.readFile("textCuong.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

