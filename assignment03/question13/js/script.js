function process() {

	// Collect two numbers from user	
	var num1Input = parseInt(document.getElementById("num1").value);
	var num2Input = parseInt(document.getElementById("num2").value);

	// Function for finding divisors of a number
	function findDivisors(x) {
		// Colelct in array
		var divisors = new Array();
		divisors.push(x);
		for(var i=x; i>0; i--) {
			// Test if division produced whole number
			var testDiv = x / i;
			// If it does push to array
			if ((testDiv % 2) == 0) {
				divisors.push(i);
			}
		}
		return divisors;
	}

	// Function for finding largest number in array
	function lrgNum(y) {
		var z = Math.max.apply(Math, y);
		return z;
	}

	// Find common denominators
	function findCD(w,v) {
		// Find deominators
		var aDiv = findDivisors(w);
		var bDiv = findDivisors(v);

		// Find longest array
		if (aDiv.length < bDiv.length) {
			alert(aDiv);
			// Filter through smallest array and try to find match in largest
			for(var n=0; n<aDiv.length; n++) {
				alert(aDiv[n];)
			}
		}
// TO DO: need to figure out how to compare the two arrays
	}
	findCD(18, 36);

	// Find GCD of two numbers
	function findGCD(a,b) {
		var aLrgDiv = lrgNum(findDivisors(a));
		var bLrgDiv = lrgNum(findDivisors(b));
	}
	

	// Function for writing results
	function outputResults(id, variable, message) {
		document.getElementById(id).innerHTML = '<h2>'+message+' '+variable+'</h2>';
	}

	// Calulate result for output
	var result = "Result output here...";

	// Print results to page with function
	outputResults("results", result, "The results are:")

}