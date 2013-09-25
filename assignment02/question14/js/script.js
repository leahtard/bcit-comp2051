function invest() {
	
	// Ask for principle
	var p = parseInt(prompt('How much did you invest?', '1000'));
	// define interest rate
	var r = 0.05

	// open table and create title row
	document.write('<table border=1 cellpadding=1><tr class="title-row"><td><strong>Year</strong></td><td><strong>Balance</strong></td></tr>');

	// user for loop to go through 10 years
	for(y=1;y<11;y++) {
		var a = p * (1 + r);
		var p = a;
		document.write('<tr><td>Year '+y+'</td><td>$'+a+'</td></tr>');
	}

	// close table
	document.write('<table>');

}