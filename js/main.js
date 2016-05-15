function askQuestions (){

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName + ' ' + lastName;
console.log(fullName);

var age = prompt('How old are you?');
age = parseInt(age);

if (age >= 18) {
	console.log('User is an adult');
} else if (age >= 13) {
	console.log ('User is a teenager');
} else {
	console.log('User is a child');

}

$('h2').text(firstName + ' is ' + age + ' years old ');

if (firstName.toLowerCase() ==='general' && lastName.toLowerCase !=='assembly') {
	console.log ("generally speaking I'm in favour of the revolution");
}

var faveColour = prompt('What is your favourite colour?').toLowerCase();

if (faveColour === 'blue' ||
	faveColour === 'navy' ||
	faveColour === 'darkblue' ||
	faveColour === 'grey') {

	$('h1') .css('color', faveColour);
}
}




//when the page loads
$(function() {

	$('img').on('click', askQuestions);

	//When the user clicks a heading
	$('h3').on('click', function() {
		
		//Hide the content after the heading
		$(this).next() .slideToggle(1000);

 	});

});