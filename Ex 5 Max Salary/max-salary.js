var salaries = [600,1000, 2000, 3000, 50];

document.write("Salaries are: "+salaries);

var minSalary = salaries[0];

for(var i = 0; i < salaries.length; i++) {

	if(salaries[i]<minSalary){
	minSalary = salaries[i]; 

	}
}

console.log(minSalary);



var node=document.createElement("LI");
var itemText = document.createTextNode("The Lowest Salary is: "+minSalary);
node.appendChild(itemText); 

document.getElementById("mylist").appendChild(node);

