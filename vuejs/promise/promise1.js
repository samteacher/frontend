const fs = require("fs");

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
    // 异步的  在执行真正的Promise里面的代码，promise已经返回了
    return promise;
}

// 结果返出去，是在return之前，这是异步的特点


// 当then接收两个匿名函数做为参数的话
// 它分别代表 resolve 和 reject 方法的返回值
// var atxt = readFile("D://a.txt").then((data)=>{
//     console.log(data);
// },(err)=>{
//     // 错误信息：Error: ENOENT: no such file or directory, open 'D:\aa.txt'
//     console.log("错误信息：" + err);
// });


// 这段代码与上代码是等价的
readFile("D://a.txt").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("错误信息：" + err);
});