
$(document).ready(function() {
	
	$('#showmapbutton').click(function(){
  navigator.geolocation.getCurrentPosition(gotPosition,errorGettingPosition);
		showOnMap(lat, longitude);
	});
	// Add something to do when the DOM is ready
});
 
 var lat, longitude;

function gotPosition (position) {

lat = position.coords.latitude;
longitude = position.coords.longitude;
}

function errorGettingPosition(error) {
	alert("getCurrentPosition failed with error: " + error);
}


function showOnMap(lat, longitude) {

	var myCoords = new google.maps.LatLng(lat, longitude);
	var myOptions = {
						zoom: 13,
						center: myCoords,
					};
				
				
	var map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions); 
	var map = new google.maps.Map($("#mapCanvas"), myOptions);	
	
				
	var marker = new google.maps.Marker({
						position: myCoords,
						map: map,
						title: "Here I am!"
				});
}