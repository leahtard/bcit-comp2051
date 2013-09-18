// Ask user how many tanks will be entered.
var itemNum = prompt('How many items did you sell today?', '');

// Set total variable to 0
var salesTotal = 0;

// Initiate prompt to collect sales
for (var saleNum=0;saleNum<itemNum;saleNum++) { 

	// Collect sales
	var sale = prompt('Enter the value for one item:', '0');

	// Convert values to integers
	var saleInt = parseInt(sale);

	// Add sale to total ever time one is entered
	var salesTotal = salesTotal + saleInt;

	document.write('Item number '+(saleNum+1)+' value: <strong>$'+saleInt + '</strong><br>');
}

// Write total sales
document.write('<strong>Total sales: $'+(salesTotal)+'</strong>');

// Determine commission
// Need at least $20 in sales to qualify for commission
if (salesTotal < 20) {
	document.write('<h4>Sorry you must sell at least $20 to recieve commission.</h4>');
	var commission = 0
} 
if ((salesTotal >= 20) && (salesTotal <= 99)) {
	document.write('<h4>Today your sales qualified you for 5% commission.</h4>');
	var commission = 0.05
}
if (salesTotal > 99) {
	document.write('<h4>Today your sales qualified you for 10% commission.</h4>');
	var commission = 0.1
}

// Calcuate commission
var commissionPay = salesTotal * commission;

// Ask how many hours workd
var hours = prompt('How many hours did you work today?', '');
var hoursInt = parseInt(hours);
var rate = 10;
var basePay = hoursInt * rate;

document.write('Total base pay: $'+basePay+'<br>');
document.write('Total commission: $'+commissionPay+'<br>');

var totalEarned = basePay + commissionPay;

document.write('<h4>Total earned: $'+totalEarned+'</h4>');

