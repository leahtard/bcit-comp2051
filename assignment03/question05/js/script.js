function process() {

	// Collect data from form
	var integerInput = parseInt(document.getElementById("int").value);
	var multipleInput = parseInt(document.getElementById("mult").value);

	// Function determining if the second number is a multiple
	function isMultiple(integer, multiple) {
		r = multiple / integer;
		if (r===+r && r===(r|0)) { // If the number an integer (no decimal)
			return true;
		} else { // Esle if the number is a float (with decimal)
			return false;
		}
	}

	// Function for writing results
	function outputResults(id, variable, message) {
		document.getElementById(id).innerHTML = '<h2>'+message+' '+variable+'</h2>';
	}

	// Calulate result for output
	var result = isMultiple(integerInput, multipleInput);

	// Print results to page with function
	outputResults("results", result, "The results are:")

}