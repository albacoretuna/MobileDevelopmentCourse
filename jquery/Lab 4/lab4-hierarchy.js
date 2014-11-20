

$(document).ready(function(){ 

	$("#dadDiv").on("click", function(){console.log('DadDiv Clicked');});
	$("#sonDiv").on("click", function(){console.log('SonDiv Clicked');});
	$("#photo").on("click", function(){console.log('PhotoClicked');});

	$("#photo").on("click", function(e){console.log('The mouse was on X '+ e.pageX + "Y cord: " + e.pageY);});

 });

