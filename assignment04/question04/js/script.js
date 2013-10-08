// Function for writing results
function outputResults(id, variable, message) {
	document.getElementById(id).innerHTML = '<h2>'+message+' '+variable+'</h2>';
}

// Random number generator
function randomNum() {
	return Math.floor(Math.random() * 20) + 10;
}

// Add random number to array
function randomArray(n) {
	var data = new Array;
	for (var i=0; i<n; i++) {
		var num = randomNum();
		data.push(num);
	}
	return data;
}

// Create random array
var array = randomArray(20);

function process() {

	var uniqueNums = new Array;

	for (var i=0; i<array.length; i++) {
		alert(array[i]);
		uniqueNums.push(array[i]); // Need to only push if it isn't already there???
	}

	// Calulate result for output
	var result = uniqueNums;

	// Print results to page with function
	outputResults("results", result, "The unique numbers in the array are:")

}