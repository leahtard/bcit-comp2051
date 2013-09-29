// Ask how many cars parked
var num = parseInt(prompt('How many cars parked in the lot today?', ''));

// Collect data in array


// Output the correct number for form fields
function formData() {
	for (var i=0;i<num;i++) {
		document.write('Hours for car '+(i+1)+': <input type="text" name="hours" id="hours"> <br />');
		//data.push(1);
		//data.push(hours);
		//return data;
	};
	
}
formData();

// Collect
function submitHours() {
	var data = new Array();
	var hours = document.getElementById("hours").value;
	for (var i=0; i<hours.length; i++) {
	data.push(hours);
	}
	for (var i=0; i<data.length; i++) {
	  alert(data[i]);
	  // Do something with element i.
	}	
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

