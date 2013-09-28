function process() {

	// Collect data from form
	var integerInput = parseInt(document.getElementById("int").value);
	var exponentInput = parseInt(document.getElementById("exp").value);

	// Function for determining integer with power
	function integerPower(integer, exponent) {
		var e = 1;
		var r = integer;
		while (e < exponent) {
			r = r * integer;
			e++;
		}
		return r;
	}

	// Function for writing results
	function outputResults(id, variable, message) {
		document.getElementById(id).innerHTML = '<h2>'+message+' '+variable+'</h2>';
	}

	// Calulate result
	var result = integerPower(integerInput, exponentInput);

	// Print results to page with function
	outputResults("results", result, "This equals:")

}