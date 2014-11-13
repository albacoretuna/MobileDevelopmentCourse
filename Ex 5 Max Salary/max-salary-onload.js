function init(){


var salaries = [600,1000, 2000, 3000, 50];

//document.write("Salaries are: "+salaries);

var minSalary = salaries[0];

for(var i in salaries) {

	if(salaries[i]<minSalary){
	minSalary = salaries[i]; 

	}
}

console.log(minSalary);

document.getElementById("suurin").innerHTML = "Pienin: " + minSalary;

}
