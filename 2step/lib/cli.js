/***
 * CLI-skeleton
 * 
 */

 //deps
var readline = require("readline");
var util = require("util");
var debug = util.debuglog("cli");
var events = require("events");
var color = require("./color");
var greeting = require("./greeting");
var responder = require("./responder");
var dat = require("./const");
const CMDS  = Object.keys(dat.SUPPORT);
class _events extends events {

} 
var  e = new _events();


// CLI core
var cli = {};


//handle user input triggered events
e.on("man",function(str){
    responder.help(str);
});
e.on("help",function(str){
    responder.help(str);
});
e.on("exit",function(str){
    responder.exit(str);
});
e.on("stats",function(str){
    responder.stats(str);
});
e.on("list users",function(str){
    responder.listUsers(str);
});
e.on("list checks",function(str){
    responder.listChecks(str);
});
e.on("more check info",function(str){
    responder.moreCheckInfo(str);
});
e.on("list logs",function(str){
    responder.listLogs(str);
});
e.on("more log info",function(str){
    responder.moreLogInfo(str);
});

//user input process
cli.processInput = function(str){
    str = typeof(str)=="string" && str.trim()?str.trim():false;
    if(str){
        var matchFound = false;
        var counter = 0;
        CMDS.some(function(cmd){
            if(str.toLowerCase().indexOf(cmd)!=-1){
                matchFound = true;
                //发出事件通知，找到了用户输入和支持的命令之间的匹配值
                e.emit(cmd,str);
                return true;
            }
        });

        //如果没找到，走默认的命令，
        if(!matchFound){
            console.log("no mathcing cmd found");
        }
    }
}


//init script

cli.init = function(){
    //show greeting
    greeting.show();

    //create an interface
    var _interface = readline.createInterface({
        input:process.stdin,
        output:process.stdout,
        promp:''
    });

    // show prompt
    _interface.prompt();

    //handle each line user typed
    _interface.on("line",function(str){
        //处理用户输入
        cli.processInput(str);


        //重新弹出prompt窗口
        _interface.prompt();
    });

    //handle out
    _interface.on("close",function(){
        process.exit(0);
    });
}






// export the cli core module
module.exports = cli;
