function process() {
	alert('Hello World');

	// Function for writing results
	function outputResults(id, variable, message) {
		document.getElementById(id).innerHTML = '<h2>'+message+' '+variable+'</h2>';
	}

	// Calulate result for output
	var result = "Result output here...";

	// Print results to page with function
	outputResults("results", result, "The results are:")

}