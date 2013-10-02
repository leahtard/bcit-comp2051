// Function for creating random number
function randomNum() {
	r = Math.floor((Math.random() * 9) + 1);
	return r;
}

// Print two numbers to screen
function getQuestion() {
	// Create two random numbers
	var num1 = randomNum();
	var num2 = randomNum();
	//var answer = checkAnswer(num1, num2);

	document.getElementById("question").innerHTML = '<h2>What is '+num1+' x '+num2+'?</h2><input type="text" name="answer" id="answer"><br><br><button onclick="checkAnswer('+num1+', '+num2+')">Check Answer</button>';

	if (answer == true) {
		alert('You are right. Try another...');
	} else {
		alert('Please try again...');
	}

}

function checkAnswer(x,y) {
	var correct = x * y;
	var input = parseInt(document.getElementById("answer").value);
	if (correct == input) {
		return true;
	} else {
		return false;
	}
}