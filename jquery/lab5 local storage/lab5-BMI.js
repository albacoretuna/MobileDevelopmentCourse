


$(document).ready(function() {
var result;
var weight;
var height;
var savedBMI;



$('#clcbutton').click(function(){

	weight = parseInt($('#weight').val(), 10);
	height = parseInt($('#height').val(), 10);

	console.log(height);
	console.log(weight);
 
 result =  weight/(height/100*height/100);

 console.log(result);
 $('#txt').append(result);
});

savedBMI = localStorage.getItem("BMI"); 
if(savedBMI != undefined) {
	$('#txt2').text("The last BMI saved is:" + savedBMI);
}

$('#savebutton').click(function(){
localStorage.setItem("BMI",result);
});


});










