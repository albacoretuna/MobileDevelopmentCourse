/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
$( document ).on( "pageinit", "#findclosest", function() {
    var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434);  // Default to Hollywood, CA when no geolocation support
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "You are here"
        });
        var kirppis1 = new google.maps.Marker({
            position: new google.maps.LatLng(60.1420658,24.6669204),
            map: map,
            title: "Fida, Suokka, Espoo",
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
        var kirppis2 = new google.maps.Marker({
            position: new google.maps.LatLng(60.2047459,24.6592818),
            map: map,
            title: "Fida, Espoonkeskus, Espoo",
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
        var kirppis3 = new google.maps.Marker({
            position: new google.maps.LatLng(60.8780374,21.697345),
            map: map,
            title: "Leppis, Leppävaara, Laitila",
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
    }
});