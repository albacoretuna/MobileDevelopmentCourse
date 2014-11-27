


$(document).ready(function() {


var last = localStorage.getItem("last");
var visitCount = localStorage.getItem("visitCount");
if(visitCount != undefined	) {
$('#txt2').text("You have visited this page "+ visitCount + "times.") ;

visitCount++; 
localStorage.setItem("visitCount", visitCount );

 

}
else {

    $('#txt2').text("This is your first visit! Welcome!") ;	
	localStorage.setItem("visitCount",1);
}
if(last != undefined){
	$('#txt').text("The button was last pushed at "+last);
} 

$('button').click(function(){ 

var lastClicked = Date();
//console.log(lastClicked);

localStorage.setItem("last", lastClicked)

  last = localStorage.getItem("last");
$('h2').text(last);
});


});




