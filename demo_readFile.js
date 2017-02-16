function demo_readFile()
{
    let fs = require("fs");
    console.log("demo_readFile: start");
    fs.readFile("c:\\windows-version.txt", function (err, data) {
        if (err)
            return console.error(err);
        console.log("demo_readFile: readFile callback");
        console.log("demo_readFile: filecontent\r\n" + data.toString());
    });
    
    console.log("demo_readFile: end");
} 

//demo_readFile();

exports.demo = demo_readFile;