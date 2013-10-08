function process() {
	var a = new Array('1a','2a','3a','4a','5a','6a','7a','8a','9a','10a','11a');
	var b = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34);
	var c = a.concat(b);

	// Function for writing results
	function outputResults(id, variable, message) {
		document.getElementById(id).innerHTML = '<h2>'+message+' '+variable+'</h2>';
	}

	// Print results to page with function
	outputResults("results", c, "The merged array:")

}