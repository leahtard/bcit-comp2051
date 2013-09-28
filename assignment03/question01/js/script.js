function initiate() {

	function circleArea(r) {
		var a = Math.PI * Math.pow(r,2); 
		return a;
	}

	var radius = parseInt(prompt('Enter the radius of your circle:', ''));
	var area = circleArea(radius);

	document.write('<p>The area of a circle with the radius of '+radius+' is: '+area+'</p>');

}


