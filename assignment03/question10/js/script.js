function process() {

	// Collect data	
	var num1 = parseInt(prompt('Enter your first number', ''));
	var num2 = parseInt(prompt('Enter your second number', ''));
	var num3 = parseInt(prompt('Enter your third number', ''));

	// Function for finding the smallest of three
	function minimum3(a, b, c) {
		var r = Math.min(a,(Math.min(b,c)));
		return r;
	}

	// Function for writing results
	function outputResults(id, variable, message) {
		document.getElementById(id).innerHTML = '<h2>'+message+' '+variable+'</h2>';
	}

	// Calulate result for output
	var result = minimum3(num1, num2, num3);

	// Print results to page with function
	outputResults("results", result, "The lowest number is:")

}