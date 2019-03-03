
/****
 * 
 * 定义一个异步函数， 就是说这个函数不会立刻返回，不会阻止后面函数的执行
 */

 async function timout(){
    return  "hello world";
 }

async function timerr(){
    throw "wrong";
}
 //被aynsc 修饰的函数，无论里面是不是返回什么，都会立刻返回一个包装的promise
 //这个promise 是async的机制，根据返回的内容，如果不是一场，那么就 resolve ，如果异常就会 reject



 timout();//打印出一个 promsie

timout().then(function(result){
    console.log(result);
});

timerr().catch((err)=>{
    console.log("err",err);
});

 console.log("这句话应该出现在 timout之后");


 console.log("-------------------------------------------");

 //注意await 关键字只能放到async 函数里面
 //await 异步函数变同步的关键字

function  myPromise(sec){
    sec = sec || 1;
    console.log("需要"+sec+"秒。。。。。。");
    return  new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("hello");
        },sec*1000);
    });
}

async function doIt(){
    let result = await myPromise();
    console.log("await 修饰的函数首先，这个函数本身应该是一个异步函数，其次，await修饰的函数，会block程序的执行，直到这个函数执行完");
    console.log("打印await 修饰函数的执行结果",result);
}

async function doIt(){
    let result1 = await myPromise(1);
    let result2 = await myPromise(2);
    let result3 = await myPromise(3);
    console.log("打印结果");
    console.log(result1);
    console.log(result2);
    console.log(result3);
}


doIt();


console.log("---------------------------------------------");

var fs = require("fs");
var path = require("path");
var promisify = require("util").promisify;
var readdir = promisify(fs.readdir);

async function getdir(folder){
    var url1 = path.resolve(path.join(__dirname,"/"+folder));
    var result = await readdir(url1);
    console.log("得到的结果是----------");
    console.log(result);
}

getdir("../");

