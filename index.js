
// create a function for when the button is clicked the user information is 
	// used to calculate monthly mortgage payments
$("#btnCalculateMortgage").click(function(){
	
	// get the loan amount from the user
	var loanBalance= $("#loanBalance").val();
	
	// get the interest rate from the user
	var interestRate= $("#interestRate").val();
	
	// get the number of years from the user
	var loanTerm= $("#loanTerm").val();
	
	// get the monthly or bi-monthly selection from the user
	var period= $("#periodSelection option:selected").val();

	// calculation for loan
	var numberOfPayments= loanTerm * period;
	var monthlyInterestRate= (interestRate/ 100)/period;
	var compoundedInterestRate= Math.pow(1+ monthlyInterestRate,numberOfPayments);
	var interestQuotient= (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
	
	// calculate monthly payment
	var monthlyPayment = Math.round((loanBalance * interestQuotient) * 100) / 100;


	// let your user know what their monthly payment will be
	$("#output").text("Your monthly mortgage rate will be $" + monthlyPayment.toFixed(2));



});