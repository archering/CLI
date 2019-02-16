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
var dim = require("./dim");
var greeting = require("./greeting");
var draw = require("./draw");

class _events extends events {

} 
var  e = new _events();

const SUPPORT = {
    'man':"show menu",
    'help':"alias for man ; show menu",
    'exit':"shutdown the CLI",
    'stats':"show current sys status",
    'list user':"list all login users",
    'list checks':"list all checks",
    'more check info':"more check info --{infoID}  show the specific info detail",
    'list logs':"show logs",
    'more log info':"more log info --{logId}   show the specific log detail"
}
//consts
const CMDS = Object.keys(SUPPORT);

// CLI core
var cli = {};


//handle user input triggered events
e.on("man",function(str){
    cli.responder.help(str);
});
e.on("help",function(str){
    cli.responder.help(str);
});
e.on("exit",function(str){
    cli.responder.exit(str);
});
e.on("stats",function(str){
    cli.responder.stats(str);
});
e.on("list users",function(str){
    cli.responder.listUsers(str);
});
e.on("list checks",function(str){
    cli.responder.listChecks(str);
});
e.on("more check info",function(str){
    cli.responder.moreCheckInfo(str);
});
e.on("list logs",function(str){
    cli.responder.listLogs(str);
});
e.on("more log info",function(str){
    cli.responder.moreLogInfo(str);
});
//deal input and give some response
cli.responder = {};
cli.responder.help = function(str){
    draw.text2("How to use this CLI",'redbg',"-");
    dim.top(1);
    for(var i=0;i<CMDS.length;i++){
        draw.text(CMDS[i] + dim.left(40-CMDS[i].length) + SUPPORT[CMDS[i]]);
    }
    dim.top(1);
    draw.hr();

} 
cli.responder.exit = function(str){
    process.exit(0);
}
cli.responder.stats = function(str){
    console.log("you just typed [" + str + "]");
}
cli.responder.listUsers = function(str){
    console.log("you just typed [" + str + "]");
}  
cli.responder.listChecks = function(str){
    console.log("you just typed [" + str + "]");
} 
cli.responder.moreCheckInfo = function(str){
    console.log("you just typed [" + str + "]");
} 
cli.responder.listLogs = function(str){
    console.log("you just typed [" + str + "]");
} 
cli.responder.moreLogInfo = function(str){
    console.log("you just typed [" + str + "]");
} 


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
