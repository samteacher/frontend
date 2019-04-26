const fs = require("fs");

var promise = new Promise(function(resolve,reject){
    console.log("begin...");
    resolve();
});

// 当在创建promise对象的时候，业务就已经在悄悄的执行

// 结果返回之前就已经把值传出去了
// resolve之前把值传出来

setTimeout(()=>{
    promise.then((data)=>{
        console.log("end...");
    });
},3000);