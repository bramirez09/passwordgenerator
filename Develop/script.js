//Array - special characters
var specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '[', '}', '}', '|', ':', ';', '"', '<', ',', '>', '.', '?', '/', "'",];

// Array - numerical characters
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

// Array - lowercase
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

//Array - uppercase
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

//what user selected confirm to from options
var userSelection = []

// function - get password options
function getPasswordOptions() {
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
     console.log("includeNumbers",userSelection)
  }

  if (includeUpperCaseCharacters === true) {
    userSelection = userSelection + upperCase
     console.log("includeUpperCaseCharacters",userSelection)
  }

  if (includeLowerCaseCharacters === true) {
    userSelection = userSelection + lowerCase
    console.log("includeLowerCaseCharacters",userSelection)
  }

  if (includeSpecialCharacters === true) {
    userSelection = userSelection + specialCharacters
     console.log("includeSpecialCharacters",userSelection)
  }

  var finalPassword = ""

  for (var i = 0; i < length; i++) {
    
    var random = Math.floor(Math.random() * length)
    console.log(userSelection[random])
    finalPassword = finalPassword + userSelection[random]
    console.log ("finalPassword", finalPassword)
    
    return finalPassword
  }


}

function generatePassword() {
  var finalPassword = getPasswordOptions() ;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
