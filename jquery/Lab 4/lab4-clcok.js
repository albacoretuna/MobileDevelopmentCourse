
/*

$(document).ready(function() {

var getTime = function() {

	$.get("http://users.metropolia.fi/~seyedhe/clock.php?param=ok"
, function(data){
$('#txt').text(data);

});

}

var interV = setInterval(getTime, 100);

$('button').click(function(){
	clearInterval(interV);
    
    });

});

*/

 
var timeURL = "http://users.metropolia.fi/~seyedhe/clock.php?param=ok";

$(document).ready(function() {
	var timer = setInterval(function(){
	  $('p').load(timeURL);
	}, 1000);

	$('button').click(function(){
	
	clearInterval(timer);
	})


});