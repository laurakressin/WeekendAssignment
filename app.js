var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayedOut = 0;



function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
	initialList.push(this);
}

var claim6 = new claim("Frankenstein", "Emergency", 15050);

var claim7 = new claim("Dracula", "Specialist", 1800);

var claim8 = new claim("Godzilla", "Primary Care", 600);

var claim9 = new claim("Casper", "Specialist", 1350);

var claim10 = new claim("Xenomorph", "Optical", 120);


//function to determine percent covered
var percentCover = function(array) {
	var percent = 0;
	var type = array.visitType;
	if (type == "Specialist") {
		percent += .1;
	} else if (type == "Emergency") {
		percent += 1;
	} else if (type == "Primary Care") {
		percent += .5;
	} else {
		percent += 0;
	}
	return percent;
};

//function to determine amount covered
var amountCover = function(array) {
	var cost = array.visitCost;
	var name = array.patientName;
	totalPayedOut = cost * percentCover(array);
	alert("Paid out $" + totalPayedOut + " for " + name);
	return ("Paid out $" + totalPayedOut + " for " + name);
};

var newEl, newText, position;
position = document.getElementById('content');

for(var i = 0; i < initialList.length; i++){
 	newEl = document.createElement('li');
	newText = document.createTextNode(amountCover(initialList[i]));
	newEl.appendChild(newText);
	position.appendChild(newEl);
	// console.log(i);
	// Debug code
	console.log("initialList[" + i +"]: " + amountCover(initialList[i]));
}

// console.log(amountCover(initialList[4]));
