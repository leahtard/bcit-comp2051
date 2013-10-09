function process() {

	var items = [['1a','2a','3a','4a','5a'],['1b','2b','3b','4b','5b'],['1c','2c','3c','4c','5c']];
	var itemsRow = items.length;
	var itemsColumn = items[0].length;

	function countElements() {
		var count = 0;
		for (var i=0; i<items.length; i++) {
			for (var j=0; j<items[i].length; j++) {
				count++;
			}
		}
		return count;
	}
	var totalItems = countElements();

	document.getElementById('results').innerHTML = '<h2>This array has '+itemsRow+' rows</h2><h2>This array has '+itemsColumn+' columns</h2><h2>This array has a total of '+totalItems+' elements</h2><h2>The second row of the array contains: '+items[1]+'</h2><h2>The third row of the array contains: '+items[2]+'</h2>';

}