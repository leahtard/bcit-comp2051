function process() {
	var averageInput = parseFloat(document.getElementById("average").value);

	function qualityPoints(x) {
		var r;
		if (x >= 90) {
			r = 4;
		} else if ((x < 90) && (x >=80)) {
			r = 3;
		}
		else if ((x < 80) && (x >=70)) {
			r = 2;
		}
		else if ((x < 70) && (x >=60)) {
			r = 1;
		} else if (x < 60) {
			r = 0;
		}
		return r;
	}

	// Function for writing results
	function outputResults(id, variable, message) {
		document.getElementById(id).innerHTML = '<h2>'+message+' '+variable+'</h2>';
	}

	// Calulate result for output
	var result = qualityPoints(averageInput);

	// Print results to page with function
	outputResults("results", result, "Your GPA is:")

}