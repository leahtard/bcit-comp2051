// Assign the sum of x and y to z, and increment the value of x by 1 after the calculation. Use only one statment.
var x = prompt('Enter number x:', '');
var y = prompt('Enter number y:', '');
var z = (parseInt(x)+1) + parseInt(y);

// Test whether the value of the variable count is greater than 10. If it is, then print "Count is greater than ten.
if (z > 10) {
  alert('Count is greater than ten.');
}

// Decrement the variable x by 1, then subtract it from the variable total. Use only one statement.
var d = (parseInt(x)-1) - z;


// Calculate the remainder after q is divided by divisor, and assign the result to q. Write this statment in two different ways.
var q = prompt('Enter a value for q:', '');
var divisor = prompt('Enter a divisor:', '');
// Option 1
var q = q / divisor;
alert('Now q equals the remainder q/divisor: '+q);
// Option 2
var q = q % divisor;
alert('Now q equals the remainder q%divisor: '+q);



// Declare variables sum and x
var sum, x;
// Assign 1 to variable x
var x = 1;
// Assign 0 to variable sum
var sum = 0;
// Add variable x to variable sum, and assign the result to variable sum. Print "The sum is: ", followed by the value of variable sum.
var sum = x + sum;
document.write('<p>The sum is: '+sum+'</p>');