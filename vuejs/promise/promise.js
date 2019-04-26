const fs = require("fs");

// function readFile(fileName){
//     fs.readFile(fileName,"UTF-8",function(err, data){
//         if(!err)console.log(data);
//     });
// }

function readFile(fileName){
    var promise = new Promise(function(resolve,reject){
        fs.readFile(fileName,"UTF-8",function(err, data){
            if(!err){
                resolve(data);
            }else{
                reject(err);
            }
        });
    });
    return promise;
}

// 执行方法 node 文件名.js
var atxt = readFile("D://a.txt"); // atxt现在是一个Promise对象
// then 方法是promise执行resolve的时候运行的方法 then方法总会返回一个新的Promise对象
atxt.then(function(data){
    console.log("1========>" + data);
    // 解决地狱回调问题
    return readFile("D://b.txt");
}).then(function(data){
    console.log("2========>" +　data);
    // 解决地狱回调问题
    return readFile("D://c.txt");
}).then(function(data){
    console.log("3========>" +　data);
});