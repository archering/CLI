/****
 * 
 * desc for this CLI tool
 * 
 */

//deps
var draw = require("./draw");
var color = require("./color");

var greet = {};

greet.show = function(){
    draw.hr();//画一条横线
    draw.text("GANG TOOL CLI",1,"yellow");
    draw.text("This tool is build for testing how to use node.js create a CLI.",1);
}

module.exports = greet;