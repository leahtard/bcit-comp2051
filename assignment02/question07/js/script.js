function gasCalc() {

// Ask user how many tanks will be entered.
var tanks = prompt('Let\'s calculate your gas milage. How many tanks are you entering today?', '');

// Set total variables to 0
var gallonsTotal = 0;
var milesTotal = 0;

// Use for loop to keep track of how many tanks have been entered.
for (var tankNum=0;tankNum<tanks;tankNum++) {
	
	// Ask user to enter gallons and miles for every tank
	var gallons = prompt('How many gallons were in this tank?', '');
	var miles = prompt('How many miles did you get out of this tank?', '');

	// Convert values to integers
	var gallonsInt = parseInt(gallons);
	var milesInt = parseInt(miles);

	// Determine miles per gallon
	var milesPerGal = milesInt / gallonsInt;

	// Add gallons to total ever time one is entered
	var gallonsTotal = gallonsTotal + gallonsInt;
	// Add miles to total ever time one is entered
	var milesTotal = milesTotal + milesInt;

	// Write miles per gallon for each tank.
	document.write('<p>Tank number '+(tankNum+1)+' got '+milesPerGal+' miles per gallon.</p>');

}

// Determine total miles per gallon
var milesPerGalTotal = milesTotal / gallonsTotal;

// Write total miles per gallon for each tank.
document.write('<h2>Your average miles per gallon is: '+milesPerGalTotal+'</h2>');

}
