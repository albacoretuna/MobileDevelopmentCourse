/**
 * Mobiiliohjelmoinnin tentti 11.12.2014
 * Täytä alla olevat tiedot ja koodaa tämän kommenttiblokin alle
 * NIMI: Omid Hezaveh
 * OPISKELIJANUMERO: 1305909
 */

 /*  Muttuijen nimeäminen: OHvarNames 
     Ei Math olioa
 */

 var OHluku = [-33, 8, "seven", 0, 101, 99, -96, 6, 26, "b3", 4, -7];
// jQuery begins
 $(document).ready(function(){
  $("#header").append("<button id='OHbutton'>Löydä suuremmat!</button>");
  $("#OHbutton").on("click",  function(){
 var OHonlynumbers  = new Array();
 for (var i = 0; i < OHluku.length; i++){
 	if(Number(OHluku[i])) {
 		OHonlynumbers.push(OHluku[i]);
 	}
 }
var Suurin = OHonlynumbers[0];
var OHsortedArray = new Array();

for (var j = 0; j < OHonlynumbers.length; j++){
if(Suurin < OHonlynumbers[j]) {
	Suurin = OHonlynumbers[j];
    OHsortedArray.push(OHonlynumbers[j]);
}

} 	
 	console.log("The sorted array:"+ OHsortedArray + "The Numberic array:"+ OHonlynumbers);
 
 });
 });

