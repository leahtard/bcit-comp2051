function oddSum() {

	var numbers = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);

	var numOddEven = 'odd'
	var numOddTotal = 0

	for (i=0;i<numbers.length;i++) {

		if (numOddEven == 'odd') {
			numOddTotal = numOddTotal + numbers[i]
			numOddEven = 'even'

		} else if (numOddEven == 'even') {
			numOddEven = 'odd'
		}

	}

	document.write('<h3>The sum is: '+numOddTotal+'!</h3>');

}