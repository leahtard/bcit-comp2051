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
var rollResults = rollData(3600);

// Output 2 column table from array
function buildTable(x, d) {

    var tbody = '';

	for (var i=0; i<x.length; i++) {
		tbody += '<tr><td>'+d+' #'+(i+1)+'</td><td>&nbsp;'+x[i]+'&nbsp;</td></tr>';
	}

	return '<table border="1" cellpadding="3" cellspacing="0">' + tbody + '</table>';
}

function buildStatTable(x, d) {

    var tbody = '';

	for (var i=0; i<x.length; i++) {
		tbody += '<tr><td>'+d+' '+(i+2)+'</td><td>&nbsp;'+x[i]+'&nbsp;</td></tr>';
	}

	return '<table border="1" cellpadding="3" cellspacing="0">' + tbody + '</table>';
}

// Tabulate rolls
function tabulateRolls(z) {
	var results = new Array;

	var two = 0;
	for (var i=0; i<z.length; i++) {
		if (z[i] == 2) {
			two++;
		}
	}
	results.push(two);

	var three = 0;
	for (var i=0; i<z.length; i++) {
		if (z[i] == 3) {
			three++;
		}
	}
	results.push(three);

	var four = 0;
	for (var i=0; i<z.length; i++) {
		if (z[i] == 4) {
			four++;
		}
	}
	results.push(four);

	var five = 0;
	for (var i=0; i<z.length; i++) {
		if (z[i] == 5) {
			five++;
		}
	}
	results.push(five);

	var six = 0;
	for (var i=0; i<z.length; i++) {
		if (z[i] == 6) {
			six++;
		}
	}
	results.push(six);
	
	var seven = 0;
	for (var i=0; i<z.length; i++) {
		if (z[i] == 7) {
			seven++;
		}
	}
	results.push(seven);

	var eight = 0;
	for (var i=0; i<z.length; i++) {
		if (z[i] == 8) {
			eight++;
		}
	}
	results.push(eight);

	var nine = 0;
	for (var i=0; i<z.length; i++) {
		if (z[i] == 9) {
			nine++;
		}
	}
	results.push(nine);

	var ten = 0;
	for (var i=0; i<z.length; i++) {
		if (z[i] == 10) {
			ten++;
		}
	}
	results.push(ten);

	var eleven = 0;
	for (var i=0; i<z.length; i++) {
		if (z[i] ==11) {
			eleven++;
		}
	}
	results.push(eleven);

	var twelve = 0;
	for (var i=0; i<z.length; i++) {
		if (z[i] == 12) {
			twelve++;
		}
	}
	results.push(twelve);

	return results;
}

// Write array results to a table
function outputResults() {
	document.getElementById("stats").innerHTML = '<h3>Overall stats</h3>'+buildStatTable((tabulateRolls(rollResults)), 'Times rolled');
	document.getElementById("results").innerHTML = '<h3>Results by roll</h3>'+buildTable(rollResults, 'Roll');
}

// Trigger results with click
function process() {

	// Print results to page with function
	outputResults();

}