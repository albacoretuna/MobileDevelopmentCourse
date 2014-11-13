var temps = new Array ();

for (var i = 0; i<9; i ++){
	temps[i] = Math.ceil(Math.random()*30);
	//console.log(temps[i]);
	document.write(temps[i] + "<br>");

}


var minTemp; 
minTemp = temps[0]; 
//console.log(minTemp);
var lowesTempNow;
var j = 0; 
while (j < temps.length) {

if(temps[j] < minTemp) {
	minTemp = temps[j];
	console.log(minTemp); 
}
j += 1; 

}




document.write("Pienin Temp on:" + minTemp);


