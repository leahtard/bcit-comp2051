function celsius() {
	var fahrenheitInput = parseInt(document.getElementById("fahrenheit").value);
	var c = 5.0 / 9.0 * (fahrenheitInput-32);
	alert('That is '+c+' Celsius');
}

function fahrenheit() {
	var celsiusInput = parseInt(document.getElementById("celsius").value);
	var f = 9.0 / 5.0 * (celsiusInput+32);
	alert('That is '+f+' Fahrenheit');
}