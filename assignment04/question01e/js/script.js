function randomNum() {
	return Math.random().toFixed(3);
}

function randomArray(n) {
	var data = new Array;
	for (var i=0; i<n; i++) {
		var num = randomNum();
		data.push(num);
	}
	return data;
}

var array = randomArray(99);
var arrayMax = Math.max.apply(null, array);
var arrayMin = Math.min.apply(null, array);

function process() {
	document.writeln('<p>Your random 99 number array is:</p><p>'+array+'</p><p>Your largest number is: '+arrayMax+'</p></p>Your smallest number is: '+arrayMin+'</p>');

}