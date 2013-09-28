function processForm() {

	// Collect data from form
	var x1input = parseFloat(document.getElementById("x1").value);
	var y1input = parseFloat(document.getElementById("y1").value);
	var x2input = parseFloat(document.getElementById("x2").value);
	var y2input = parseFloat(document.getElementById("y2").value);

	// Function for distance formula
  	function distFormula(x1, y1, x2, y2) {
		var d = Math.sqrt((Math.pow(((x2) - (x1)), 2)) + (Math.pow(((y2) - (y1)), 2)));
		return d;
	}

	// Function for writing results
	function outputResults(id, variable, message) {
		document.getElementById(id).innerHTML = '<h2>'+message+' '+variable+'</h2>';
	}

	// Result of distance formular based on input data
	var result = distFormula(x1input, y1input, x2input, y2input);

	// Print results to page with function
	outputResults("results", result, "The distance between your two points equals:")

}

