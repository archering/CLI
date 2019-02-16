/****
 * 
 * a help tool for structure content 
 */


var dimension = {};
//命令行窗口的宽度
const w = process.stdout.columns;
//命令行窗口的高度
const h = process.stdout.rows;



//居于一行的中间
dimension.center = function(){
    var val = Marth.floor(w/2);
    var arr = new Array(val+1);
    console.log(arr.join(" "));
}

//距离cmd窗口左侧的距离
dimension.left = function(col,tag){
    col = typeof(col)=="number"?col:1;
    tag = tag && typeof(tag) == "string"?tag:" ";
    var arr = new Array(col+1);
    return arr.join(tag);
}

//垂直距离
dimension.top = function(row){
    row = typeof(row)=="number" && row>0?row:1;
    for(var i=0;i<(row||1);i++){
        console.log("");
    }
}


module.exports = dimension;