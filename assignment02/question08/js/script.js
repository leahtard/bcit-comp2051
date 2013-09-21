function payCalc() {

	var salary = 200
	var sales = new Array(239.99, 129.75, 99.95, 350.89);
	var totalSales = 0;

	for (i=0;i<sales.length;i++) {
		document.write('<p>Sale number '+(i+1)+': $'+sales[i]+'</p>');
		var totalSales = totalSales + parseInt(sales[i]);
	}

	var commission = totalSales * 0.09

	var totalPay = salary + commission;

	document.write('<h3>You made $'+totalPay+' this week.</h3><p>$'+salary+' salary and $'+commission+' comission.</p>');


}