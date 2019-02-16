/****
 * 
 * a help tool for draw line ,text, graphic rtc.
 * 
 */

 //deps
var dim = require("./dim");
var color = require("./color");
var w = process.stdout.columns;

 var draw = {};

// 画一条横穿cmd屏幕窗口的线
draw.hr = function(line){

    var arr = new Array(w+1);
    var line = typeof(line)=="string" && line.trim()!=""?line:"-";
    console.log(arr.join(line));    

}

/***
 * 
 * 
 * @PARAM str {String} 要书写的文字
 * @PARAM pos {Number} 文字起始位置
 * @PARAM styke {String} 文字的前景背景色
 */
draw.text = function(str,pos,style){
    if(str){
        var len = str.length,na = 0,format="%s";
        if(pos && pos==1){//0 左对齐，1 居中
            na = Math.floor((w - len)/2);
        }
        if(style && color.getStyle(style)){
            format = color.getStyle(style).join(format);
        }
        //根据配置的颜色和文字内容开始打印文字
        console.log(format,dim.left(na) + str);
    }
}

draw.text2 = function(str,style,tag){
    if(str){
        var len = str.length,format="%s";
        var  na = Math.floor((w - len)/2);
        if(style && color.getStyle(style)){
            format = format + color.getStyle(style).join(format) + format;
        }
        tag = tag && typeof(tag)=="string"?tag:"*";
        //根据配置的颜色和文字内容开始打印文字
        console.log(format,new Array(na+1).join(tag),str,new Array(w-len-na+1).join(tag));
    }
}


 draw.rect = function(from,wi,he){

 }

 module.exports = draw;



