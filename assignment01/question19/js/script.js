function yesClick() {
  var actNum = prompt('Enter your account number:', '');
  var preBalance = prompt('Enter your previous balance:', '');
  var totalCharge = prompt('Enter your total new charges:', '');
  var totalPay = prompt('Enter your new payments:', '');
  var credLimit = prompt('Enter your credit limit:', '');

  var balance = parseInt(preBalance) + parseInt(totalCharge) - parseInt(totalPay);

  var availCredit = credLimit - balance;

  if (balance <= credLimit) {
  	alert('You still have $'+availCredit+' in available credit.');
  } else if (balance > credLimit) {
    alert('Your account is overdrawn with a current balance of $'+availCredit+'.');
  }

}