function demo_readFile_Sync()
{
    let fs = require("fs");
    console.log("demo_readFile_Sync: start readFileSync");
    let data = fs.readFileSync("c:\\windows-version.txt");
    console.log("demo_readFile_Sync: end readFileSync");
    console.log("demo_readFile_Sync: filecontent\r\n" + data.toString());
    console.log("demo_readFile_Sync: end");
} 

//demo_readFile_Sync();

exports.demo = demo_readFile_Sync;