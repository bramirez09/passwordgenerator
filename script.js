//Arrays 

var lowerCase = "abcdefghjiklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()_+";

// function - get password options
function getPasswordOptions(e) {
  e.preventDefault();
  //what user selected confirm to from options
  var userSelection = [];
  var userChoice = window.prompt("How many characters would like your password to contain?");
  //If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }
  if (isNaN(userChoice)) {
    alert("Please input a number.");
    return;
  }

  //^^ validates user is entering number, below - is verifying length is a number
  var length = Number(userChoice);

  // verifies length (is a number) that must be within the parameters
  if (length < 8) {
    alert('Password length must be a minimum of 8 characters');
    return;
  }

  if (length > 128) {
    alert('Password length cannot exceed 129 characters');
    return;
  }

  var includeSpecialCharacters = confirm
    ('Would you like your password to contain special characters?');

  var includeLowerCaseCharacters = confirm
    ('Would you like your password to contain lowercase characters?');


  var includeUpperCaseCharacters = confirm
    ('Would you like your password to contain uppercase characters?');

  var includeNumbers = confirm
    ('Would you like your password to contain numbers?');


  if (includeNumbers === false && includeUpperCaseCharacters === false && includeLowerCaseCharacters === false && includeSpecialCharacters === false) {
    alert(' Must select at least one password criteria.');
    return;
  }

  // if condition is true (selected yes to prompt), then reassign the variable userSelection 
  if (includeNumbers === true) {
    userSelection = userSelection + numbers
    console.log("includeNumbers", userSelection)
  }

  if (includeUpperCaseCharacters === true) {
    userSelection = userSelection + upperCase
    console.log("includeUpperCaseCharacters", userSelection)
  }

  if (includeLowerCaseCharacters === true) {
    userSelection = userSelection + lowerCase
    console.log("includeLowerCaseCharacters", userSelection)
  }

  if (includeSpecialCharacters === true) {
    userSelection = userSelection + specialCharacters
    console.log("includeSpecialCharacters", userSelection)
  }

  var finalPassword = ""

  for (var i = 0; i < length; i++) {

    var random = Math.floor(Math.random() * userSelection.length)
    console.log(userSelection[random])
    finalPassword = finalPassword + userSelection[random]
  }

  console.log("finalPassword", finalPassword)
  passwordText.value = finalPassword
  return
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions);
