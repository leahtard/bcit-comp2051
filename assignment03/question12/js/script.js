function process() {
	
	// Collect data
	var input = prompt('Enter a number:', '');
	// Create new array
	var nums = new Array();
	// Put each digit into the array
	for (var i=0;i<input.length;i++) {
		nums.push(input[i]);
	}

	// Function for writing results
	function outputResults(id, variable, message) {
		document.getElementById(id).innerHTML = '<h2>'+message+' '+variable+'</h2>';
	}

	// Reverse the array
	var rev = nums.reverse();
	// Output array
	for (var i=0;i<rev.length;i++) {
		if (i==0) { // If undefined, create results variable
			var result = rev[i];
		} else { // else add to existing variable
			result = result+rev[i];
		}
	}

	// Print results to page with function
	outputResults("results", result, "The reverse of that number is:")

}