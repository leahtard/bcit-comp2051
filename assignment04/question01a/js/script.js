function process() {
	var f = new Array(1,2,3,4,5,6,7,8,9,10);

	// Function for writing results
	function outputResults(id, variable, message) {
		document.getElementById(id).innerHTML = '<h2>'+message+' '+variable+'</h2>';
	}

	// Calulate result for output
	var result = f[6];

	// Print results to page with function
	outputResults("results", result, "The 7th item in the array is:")

}