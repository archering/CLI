/****
 * a help tool for build colorful CLI
 * 
 */

 var color = {};


 const styles = {
    'bold'          : ['\x1B[1m',  '\x1B[22m'],
    'italic'        : ['\x1B[3m',  '\x1B[23m'],
    'underline'     : ['\x1B[4m',  '\x1B[24m'],
    'inverse'       : ['\x1B[7m',  '\x1B[27m'],
    'strikethrough' : ['\x1B[9m',  '\x1B[29m'],
    'white'         : ['\x1B[37m', '\x1B[39m'],
    'grey'          : ['\x1B[90m', '\x1B[39m'],
    'black'         : ['\x1B[30m', '\x1B[39m'],
    'blue'          : ['\x1B[34m', '\x1B[39m'],
    'cyan'          : ['\x1B[36m', '\x1B[39m'],
    'green'         : ['\x1B[32m', '\x1B[39m'],
    'magenta'       : ['\x1B[35m', '\x1B[39m'],
    'red'           : ['\x1B[31m', '\x1B[39m'],
    'yellow'        : ['\x1B[33m', '\x1B[39m'],
    'whitebg'       : ['\x1B[47m', '\x1B[49m'],
    'greybg'        : ['\x1B[49;5;8m', '\x1B[49m'],
    'blackbg'       : ['\x1B[40m', '\x1B[49m'],
    'bluebg'        : ['\x1B[44m', '\x1B[49m'],
    'cyanbg'        : ['\x1B[46m', '\x1B[49m'],
    'greenbg'       : ['\x1B[42m', '\x1B[49m'],
    'magentabg'     : ['\x1B[45m', '\x1B[49m'],
    'redbg'         : ['\x1B[41m', '\x1B[49m'],
    'yellowbg'      : ['\x1B[43m', '\x1B[49m']
};
 

color.STYLES = styles;

//获取颜色值
color.getStyle = function(txt){
    if(txt || typeof(txt)=="string"){
        return styles[txt] || styles[txt.toLowerCase()] ;
    }else{
        return false;
    }
}

color.white = function(content){
    return styles["white"].join(content);
}

 color.black = function(content){
    return styles["black"].join(content);
 } 

 color.red = function(content){
    return styles["red"].join(content);
 }

 color.yellow = function(content){
    return styles["yellow"].join(content);
 }

 color.blue = function(content){
    return styles["blue"].join(content);
 }

 color.green = function(content){
    return styles["green"].join(content);
 }


 color.bg = {
    white:function(){
        return styles["whitebg"].join(content);
    },
    black:function(){
        return styles["blackbg"].join(content);
    },
    red:function(content){
        return styles["redbg"].join(content);
    },
    yellow:function(content){
        return styles["yellowbg"].join(content);
    },
    blue:function(content){
        return styles["bluebg"].join(content);
    },
    green:function(content){
        return styles["greenbg"].join(content);
    }             
 }


 module.exports = color;