// Function for writing results
function outputResults(id, variable) {
	document.getElementById(id).innerHTML = variable;
}

function process() {

	var num = parseInt(prompt('How many employees are you inputting today?', ''));

	// Calulate result for output
	var form = outputForm(num);

	// Print results to page with function
	outputResults("results", form)

}

// Function for outputting form
function outputForm(n) {
	for (var i=0; i<n; i++) {
		document.write('<p>Employee '+(n+1)+' sold: <input type="text" name="employee'+(n+1)+'" id="employee'+(n+1)+'"></p>')
	}
	document.writeln('<button>Get salary</button>');
}