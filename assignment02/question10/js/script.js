function largest() {
	
	var largestNum = 0;

	for (i=0;i<10;i++) {

		var num = parseInt(prompt('Enter number '+(i+1)+' of 10:', ''));
		if (num > largestNum) {
			largestNum = num;
		}

	}

	document.write('The largest number you entered was: '+largestNum);

}