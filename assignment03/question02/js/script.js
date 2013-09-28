//function calculateCharges(h) {



//}

//calculateCharges('sdasd');

// Create Data Array
//var data = new Array(1,2,3);




// Collect data in array
function formData() {
	var hours = document.getElementById("hours").value;	
	var data = new Array();
	data.push(1);
	data.push(hours);
	return data;
}



//document.write(results);

function formComplete() {
	var results = formData();
	for (var i=0; i<results.length; i++) {
		document.write('<p>Car number '+(i+1)+': '+results[i]+' hours</p>');
	};
}

//function processData() {
//	var results = formData();
//	alert(results);
//}

//processData();

