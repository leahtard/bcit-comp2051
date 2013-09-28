function process() {

	var input = parseInt(prompt('How many sides should your star box have?', ''));

	function squareOfAsterisks(s) {
		var n = 0;
		while (n < s) {
			var n2 = 0;
			while (n2 < s) {
				document.writeln('*');
				n2++;
			}
			document.writeln('<br>');
			n++;
		}
		
	}

	squareOfAsterisks(input);

}