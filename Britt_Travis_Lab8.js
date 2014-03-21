//alert("JavaScript works!");

// Problem #1
/*
var email = "TrvisBritt@ymail.com";

var emailValidator = function(email) {

var afterAtPosition = email.lastIndexOf("@");
var periodPosition = email.indexOf(".");
var atPosition = email.indexOf("@");
var spaceCheck = email.indexOf(" ");

if (atPosition > 2) {

console.log("The symbol placed in this location is correct!");
console.log("You have entered a correct email!")

} else {

console.log("Error please try again.");

}

if (atPosition < afterAtPosition) {

console.log("There are to many @ symbols in this email, please try again.");
console.log("Sorry you have not entered a valid email address.")

}

if (spaceCheck > 0) {

console.log("Please remove all the spaces in your email.");
console.log("Sorry you have not entered a valid email address.")

}

if (periodPosition < 1) {

console.log("There is a period in the wrong position please try again.");
console.log("Sorry you have not entered a valid email address.")

}



};

var charReturn = emailValidator(email);
*/


//Problem #2
var name = "Bob John Alisa";
var backSlash = "/"
var comma = ","

var alteringPunctuation = function(firstPunctuation, secondPunctuation) {

	var firstPunctuation = name.split(" ").join(backSlash);

	console.log("These are the names of my friends " + firstPunctuation + ", they are shown here.")
	
	

	var secondPunctuation = name.split(" ").join(comma);

	console.log("These are the names of my friends " + secondPunctuation + ", they are shown here.")

};

alteringPunctuation()

