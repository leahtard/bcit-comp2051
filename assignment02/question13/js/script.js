function palindrome() {
	
	var input = prompt('Enter your five-digit palindrome', '');

	var inputNum1 = parseInt(input.substring(0,1));
	var inputNum2 = parseInt(input.substring(1,2));
	var inputNum3 = parseInt(input.substring(2,3));
	var inputNum4 = parseInt(input.substring(3,4));
	var inputNum5 = parseInt(input.substring(4,5));

	if ((inputNum1 == inputNum5) && (inputNum2 == inputNum4)) {
		alert('You are right! '+input+' is a palindrome!');
	} else {
		alert('Sorry! '+input+' is not a palindrome!');
	}

}