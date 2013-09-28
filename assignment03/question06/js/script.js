function process() {

	function isEven(n) {
		if ((n % 2 === 0) == true) { // Will validate as 'true' if input is divisible by two, and therefore even.
			return true;
		} else {
			return false;
		}
	}

	var loop = true;
	while (loop == true) {
		var nums = prompt('Enter numbers here. Type \'done\' when finished.', '');
		if (nums == 'done') {
			break;
		} else {
			numsInt = parseInt(nums);
			var r = isEven(numsInt);
			if (r == true) {
				alert('Yes, that is an even number.');
			}
			if (r == false) {
				alert('No, that is not an even number.');
			}
		}
		
	}

}