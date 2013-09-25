function encrypt() {
	
	var input = prompt('Enter your four digit number', '');
	
	// var fourDigits = new RegExp(^[0-9]{4}$);
	// if (input != ^[0-9]{4}$) {
	//	alert('Sorry you did not enter 4 digits.');
	// } else {
	//	alert('Success');
	// }

	// Break up provided string and convert to integers.
	var inputNum1 = parseInt(input.substring(0,1));
	var inputNum2 = parseInt(input.substring(1,2));
	var inputNum3 = parseInt(input.substring(2,3));
	var inputNum4 = parseInt(input.substring(3,4));

	var modNum1 = inputNum1 + 7;
	var modNum2 = inputNum2 + 7;
	var modNum3 = inputNum3 + 7; 
	var modNum4 = inputNum4 + 7;

	// Swap first and thrid
	modNum1 = modNum1 + modNum3;
	modNum3 = modNum1 - modNum3; 
	modNum1 = modNum1 - modNum3; 
	// Swap second and fourth
	modNum2 = modNum2 + modNum4;
	modNum4 = modNum2 - modNum4; 
	modNum2 = modNum2 - modNum4; 

	// Convert numbers to string an lead one digit number with a zero
	if (modNum1 <= 9) {
		modNum1.toString(); 
		modNum1 = "0" + modNum1;
	}
	if (modNum2 <= 9) {
		modNum2.toString(); 
		modNum2 = "0" + modNum2;
	}
	if (modNum3 <= 9) {
		modNum3.toString(); 
		modNum3 = "0" + modNum3;
	}
	if (modNum4 <= 9) {
		modNum4.toString(); 
		modNum4 = "0" + modNum4;
	}

	document.write('<h4>Your encrypted number is:</h4><p>'+modNum1+modNum2+modNum3+modNum4+'</p>');

}

function decrypt() {

	var input = prompt('Enter your encrypted number (should be 8 digits)', '');

	// Break up provided string and convert into two digit integers.
	var inputNum1 = parseInt(input.substring(0,2));
	var inputNum2 = parseInt(input.substring(2,4));
	var inputNum3 = parseInt(input.substring(4,6));
	var inputNum4 = parseInt(input.substring(6,8));

	// Swap first and thrid
	inputNum1 = inputNum1 + inputNum3;
	inputNum3 = inputNum1 - inputNum3; 
	inputNum1 = inputNum1 - inputNum3; 
	// Swap second and fourth
	inputNum2 = inputNum2 + inputNum4;
	inputNum4 = inputNum2 - inputNum4; 
	inputNum2 = inputNum2 - inputNum4; 

	var modNum1 = inputNum1 - 7;
	var modNum2 = inputNum2 - 7;
	var modNum3 = inputNum3 - 7; 
	var modNum4 = inputNum4 - 7;

	document.write('<h4>Your decrypted number is:</h4><p>'+modNum1+modNum2+modNum3+modNum4+'</p>');

}