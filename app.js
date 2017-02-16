console.time("start");

// 阻塞代码实例
let demo1 = require("./demo_readFileSync.js");
demo1.demo();

// 非阻塞代码实例

let demo2 = require("./demo_readFile.js");
demo2.demo();

console.timeEnd("start");