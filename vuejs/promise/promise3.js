const fs = require("fs");

function readFile(fileName){
    var promise = new Promise(function(resolve,reject){
        fs.readFile(fileName, "UTF-8", (err, data)=>!err ? resolve(data) : reject(err));
    });
    return promise;
}

// promise.all
// 它可以执行多个promise，同时执行，统一的回调和异常的捕获
// 只有数值中所有的Pormise执行成功才会入resolve方法;如果有一个执行失败，就会进入reject方法;

// Promise.all 第二种写法
var files = ['a.txt','b.txt','c.txt'];
var promises = files.map((value)=>{
    return readFile("d://" + value);
});
Promise.all(promises).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});

// Promise.all 第二种写法
var areadFile = readFile("D://a.txt");
var breadFile = readFile("D://b.txt");
var creadFile = readFile("D://c.txt");
Promise.all([areadFile ,breadFile ,creadFile]).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});