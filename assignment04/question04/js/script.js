function randomNum() {
	return Math.floor(Math.random() * 90) + 10;
}

function randomArray(n) {
	var data = new Array;
	for (var i=0; i<n; i++) {
		var num = randomNum();
		data.push(num);
	}
	return data;
}

var array = randomArray(20)

alert(array);

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