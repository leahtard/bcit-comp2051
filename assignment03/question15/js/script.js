var result = new Array();

function coinFlip() {
	r = Math.floor((Math.random()*2)+1);
	if (r == 1) {
		r = true;
		alert('Heads');
	} 
	if (r == 2) {
		r = false;
		alert('Tails');
	}
	return result.push(r);
}

function getResults() {
	var headsTotal = 0;
	var tailsTotal = 0;
	for(var i=0; i<result.length; i++) {
		if (result[i] == true) {
			headsTotal = headsTotal + 1;
		}
		if (result[i] == false) {
			tailsTotal = tailsTotal + 1;
		}
	}
	document.getElementById("results").innerHTML = '<h2>You flipped Heads '+headsTotal+' times and Tails '+tailsTotal+' times</h2>';
}