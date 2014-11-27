


$(document).ready(function() {



$('button').click(function(){ 
var lastClicked = Date();
console.log(lastClicked);

localStorage.setItem("last", lastClicked)

var last = localStorage.getItem("last");
$('h2').text(last);

});


});




