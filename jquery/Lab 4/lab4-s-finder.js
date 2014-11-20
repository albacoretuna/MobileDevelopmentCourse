

//console.log(chainStr.split('s'));

$(document).ready(function(){ 

	$("#tp").append(" "+sCount);

 });

var rawStr =['a','as', 'bis', 'c', 'cis', 'def', 'sin', 'tan'];
var chainStr = rawStr.join();


var sCount=chainStr.split("s").length-1;