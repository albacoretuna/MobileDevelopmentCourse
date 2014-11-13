// Code goes here
var luku = prompt("Kuinka monta riviä?", "1");

luku = parseInt(luku);

while(isNaN(luku)){
	alert("Virheellinen luku!");

}

for(var i = 0; i<luku; luku++){
document.write(lottoRivi());
}


function lottoRivi(){

 var rivi = new Array(7);
for ( var i = 0; i < 7; i++) {
	rivi[i]= Math.ceil(Math.random()*39);
}
rivi.sort(function(a,b){return a-b});
 return rivi; 

} 

