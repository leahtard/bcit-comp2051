var empName = prompt('Enter the employee name:', '');
var hrRate = prompt('Enter their hourly rate:', '');
var hrWork = prompt('Enter how many hours they worked this week:', '');
var otRate = prompt('Enter their overtime rate:', '');
var payDeductions = prompt('Enter their payroll deductions:', ''); 
var taxRate = prompt('Enter their tax rate:', '');

var grossPay = hrRate * hrWork;
var netPay = (grossPay - (grossPay * taxRate)) - payDeductions;

document.write('<h3>Here are this weeks payroll numbers for '+empName+'</h3><p>Gross pay: '+grossPay+'<br />Net Pay: '+netPay+'</p>');