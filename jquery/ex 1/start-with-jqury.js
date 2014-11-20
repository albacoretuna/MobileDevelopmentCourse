$(document).ready(function(){


	// Hide parag including
	//$("p:contains('first')").hide();

	// add a class
	//$("p:contains('first')").addClass("korosta");

	$("p:last").append("Joohooo");

// Clicking on H1 hides the last paragraph
	$('h1').click(function() {
		$('p:first').hide();
	});

//Hover gets two args, mouse over, and mouse out
	$('p:last').hover(hideHeader, showHeader);

});

// We can define functions outside Jquery
function hideHeader(){
	$('h1').hide();
}


function showHeader(){
	$('h1').show();
}
