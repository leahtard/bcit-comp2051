// Ask user how many employees are being entered
var empNum = prompt('How many employees are you entering today?', '');

// Define variable
var employeeName, payRate, hours;

// Initiate prompt to collect employees
for (var emp=0;emp<empNum;emp++) { 

	// Collect data
	var employeeName = prompt('Enter employee name:', '');
	var payRate = prompt('Enter the employee\'s hourly rate:', '');
	var hours = prompt('How many hours did this employee work this week?');

	// Convert values to integers
	var payRateInt = parseInt(payRate);
	var hoursInt = parseInt(hours);

	// Calculate Earnings
	if (hoursInt <= 40) {
	  var empEarn = payRateInt * hoursInt;
	}
	if (hoursInt > 40) {	
      var otPayRate = payRate * 1.5;
      var otHours = hoursInt - 40;
      var empEarn = (payRateInt * 40) + (otPayRate * otHours);
	}


	document.write('<p><strong>'+employeeName+'</strong><br> Total weekly earnings: $'+empEarn+'</p>');
}


  


