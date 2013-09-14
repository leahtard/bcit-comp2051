var num1 = prompt('Enter your first number:', '');
var num2 = prompt('Enter your second number:', '');
var num3 = prompt('Enter your third number:', '');

var total = parseInt(num1)+parseInt(num2)+parseInt(num3)

document.write('<h3>Thank you!</h3><p>' + num1 + ' plus ' + num2 + ' plus ' + num3 + ' equals ' + total + '</p>');