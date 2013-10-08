// Random number generator 1 - 6
function randomNum() {
	return Math.floor(Math.random() * 6) + 1;
}

// Add two random numbers between 1 & 6 to simulate die roll
function diceRoll(){
	var die01 = randomNum();
	var die02 = randomNum();
	return die01 + die02;
}

// Add dice rolls to array
function rollData(r) {

	var results = new Array;
	for (var i=0; i<r; i++) {
		var roll = diceRoll();
		results.push(roll);
	}
	return results;
}

// Roll the dice the required number of times
var rollResults = rollData(10);

// Output 2 column table from array
function buildTable(x) {

    var tbody = '';

	for (var i=0; i<x.length; i++) {
		tbody += '<tr><td> Roll #'+(i+1)+'</td><td>&nbsp;'+x[i]+'&nbsp;</td></tr>';
	}

	return '<table border="1" cellpadding="3" cellspacing="0">' + tbody + '</table>';
}

// Write array results to a table
function outputResults() {
	document.getElementById("results").innerHTML = '<h3>Results by roll</h3>'+buildTable(rollResults);
}

// Trigger results with click
function process() {

	// Print results to page with function
	outputResults();

}