var fs = require("fs");
const path = require("path");

(function convertDoubleToDecimal(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      let _file = path.join(dirPath, "/", file);
      arrayOfFiles.push(_file);
      fs.readFile(_file, "utf-8", (err, data) => {
        let newValue = data.replace(/double/g, "decimal");
        fs.writeFile(_file, newValue, "utf-8", function (err) {
          console.log("filelistAsync complete");
        });
      });
    }
  });
})("/Users/niyazibabayev/Desktop/temp")
