


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




