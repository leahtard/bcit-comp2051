function randomNum() {
	return Math.floor(Math.random() * 9) + 1;
}

function randomArray(n) {
	var data = new Array;
	for (var i=0; i<n; i++) {
		var num = randomNum();
		data.push(num);
	}
	return data;
}

function addArray(a) {
	var total = 0;
	for (var i=0; i<a.length; i++) {
		total = total + a[i];
	}
	return total;
}

function process() {
	var array = randomArray(1000);
	document.writeln('Here is your random 1000 number array: '+array);
	document.writeln('<h2>It adds up to: '+addArray(array)+'</h2>');
}