var myName = function(firstName, secondName) {
    return firstName + secondName;
};
var firstName = prompt("Enter First Name");
// alert(firstName);
var secondName = prompt("Enter Second Name");
// alert(secondName);

var myFullName = firstName + " " + secondName;
// alert(myFullName);

var add = function(number1, number2) {
    return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
// alert(add(number1, number2));

alert("My name is " + myFullName + " and I got " + result + " marks");