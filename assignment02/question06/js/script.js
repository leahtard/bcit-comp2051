function seeStars() {

	for (i=0;i<=10;i++) {

		var n = i;

		if (i = n) {
			for (a=0;a<n;a++) {
				document.write('*');
			}
			document.writeln('<br>');
		}

	}

	document.writeln('<br>');

	for (i=10;i>0;i--) {

		var n = i;

		if (i = n) {
			for (a=0;a<n;a++) {
				document.write('*');
			}
			document.writeln('<br>');
		}

	}

	document.writeln('<br>');

	for (i=10;i>0;i--) {

		var n = i;
		var s = (10 - i)*2;

		if (i = n) {
			for (a=0;a<s;a++) {
				document.write('&nbsp;');
			}
			for (a=0;a<n;a++) {
				document.write('*');
			}
			document.writeln('<br>');
		}

	}

	document.writeln('<br>');	
	
	for (i=0;i<=10;i++) {

		var n = i;
		var s = (10 - i)*2; // multiply space by 2 to simulate full character width.

		if (i = n) {
			for (a=0;a<s;a++) {
				document.write('&nbsp;');
			}
			for (a=0;a<n;a++) {
				document.write('*');
			}
			document.writeln('<br>');
		}

	} 


}
