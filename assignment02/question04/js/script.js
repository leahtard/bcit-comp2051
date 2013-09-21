function func() {
	
	var entries = parseInt(prompt('How many numbers will you be entering?', ''));
	var lowestNum = 999999999999999999999;

	for (i=0;i<entries;i++) {

		var num = parseInt(prompt('Enter a number:', ''));
		if (num < lowestNum) {
			lowestNum = num;
		}

	}

	document.write('The lowest number you entered was: '+lowestNum);

}