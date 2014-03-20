//alert("JavaScript works!");

var email = "TrvisBritt@ymail.com";

var emailValidator = function(email) {

	var afterAtPosition = email.lastIndexOf("@");
	var periodPosition = email.indexOf(".");
	var atPosition = email.indexOf("@");
	var spaceCheck = email.indexOf(" ");

	if (atPosition > 2) {

		console.log("The symbole placed in this location is correct!");
		
	}else{
		
		console.log("Error please try again.");
	}

	if (atPosition < afterAtPosition) {

		console.log("There are to many @ symboles in this email, please try again.");	
		
	}
	
	if (spaceCheck > 0)
		
		console.log("Please remove all the spaces in your email.")

//return returnSymbole;

};

var charReturn = emailValidator(email);
//console.log("The symbole is " + charReturn);
