/***
 * CLI-skeleton
 * 
 */

 //deps
var readline = require("readline");
var util = require("util");
var debug = util.debuglog("cli");
var events = require("events");

class _events extends events {

} 
var  e = new _events();

//consts
const CMDS = [
    'man',
    'help',
    'exit',
    'stats',
    'list users',
    'list checks',
    'more check info',
    'list logs',
    'more log info'
];

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
    console.log("you just typed [" + str + "]");
} 
cli.responder.exit = function(str){
    console.log("you just typed [" + str + "]");
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
    console.log('\x1b[36m%s\x1b[0m',"The CLI is running");

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
