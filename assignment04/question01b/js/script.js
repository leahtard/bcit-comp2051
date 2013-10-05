function process() {
	var g = new Array(1,2,3,4,5,6,7,8,9,10);

	// Function for outputting array
	function arrayOutput(a) {
		for (var i=0; i<a.length; i++) {
			document.writeln(a[i]+'<br>');
		}
	}

	// Calulate result for output
	var result = arrayOutput(g);

}