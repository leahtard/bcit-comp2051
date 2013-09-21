function results() {
	
	var totalPass = 0;
	var totalFail = 0;

	for (i=0;i<10;i++) {
		var results = parseInt(prompt('Enter results for student number '+(i+1)+' (1 for passed and 2 for failed)', ''));

		if (results == 1) {
			totalPass++;
			document.writeln('<p>Student number '+(i+1)+' passed.</p>');
		} else if (results == 2) {
			totalFail++;
			document.writeln('<p>Student number '+(i+1)+' failed.</p>');
		}
	}

	document.write('<h3>'+totalPass+' students passed and '+totalFail+' students failed.</h3>');

	if (totalPass > 8){
		document.write('<h1>It\'s time to raise tuition.</h1>');
	}

}