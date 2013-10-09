function process() {
	
	var items = [['1a','2a','3a','4a','5a'],['1b','2b','3b','4b','5b'],['1c','2c','3c','4c','5c']];
	
	// Update row 1 column 2 to zero
	items[0][1] = 0;

	// Write array results to screen
	document.getElementById('results').innerHTML = '<h2>Row 1 '+items[0]+'</h2><h2>Row 2 '+items[1]+'</h2><h2>Row 3 '+items[2]+'</h2>';

}