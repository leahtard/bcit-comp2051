

// Function for finding divisors of a number
function findDivisors(x) {
	// Colelct in array
	var divisors = new Array();
	for(var i=x; i>0; i--) {
		// Test if division produced whole number
		var testDiv = x / i;
		// If it does push to array
		if ((testDiv % 2) == 0) {
			divisors.push(i);
		}
	}
	//if divisors array is empty return 'false' for prime number
	if (divisors.length == 0) {
		r = false;
	} else if (divisors.length >= 1) { // else return the divisors array
		r = divisors;
	}
	return r;
}

function isPrime() {
	// Collect user data
	var numInput = parseInt(document.getElementById("num").value);
	// Run through findDivisors function
	var testPrime = findDivisors(numInput);
	// Output based on if number is prime or not
	if (testPrime == false) {
		document.getElementById("results").innerHTML = '<h2>Yes, '+numInput+' is a prime number.</h2>';
	} else {
		document.getElementById("results").innerHTML = '<h2>No, '+numInput+' is not a prime number.</h2>';
	}
}

function findPrime() {
	// Create array to collect results
	var primes = new Array();
	// Loop through numbers 1 - 1000
	for(var i=1; i<100; i++) {
		// Find the divisors of each number
		var d = findDivisors(i);
		// If divisors = false, record prime number
		if (d == false) {
			primes.push(i);
		}
	}
	document.getElementById("results").innerHTML = '<textarea>'+primes+'</textarea>';
}

function process() {


	

	// Calulate result for output
	var result = "Result output here...";

	// Print results to page with function
	outputResults("results", result, "The results are:")

}