//Array - special characters
var specialcharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '[', '}', '}', '|', ':', ';', '"', '<', ',', '>', '.', '?', '/', '\\', "'",  ];

// Array - numerical characters
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ];

// Array - lowercase
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ]; 

//Array - uppercase
 var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ]; 

 // function - get password options
function getPasswordOptions() {
 var userChoice = window.prompt("How many characters would like your password to contain?");

 // is user pressed Cancel, immediately end function
 if (!userChoice) {
  return;
 }

  if (length < 8 === true) {
    alert('Password length must be a minimum of 8 characters');
    
  }
// ^issue
  if (length > 128 === true) {
    alert ('Password length cannot exceed 129 characters'); 
    
  }
  // issue
  var includeSpecialCharacters = confirm
    ('Would you like your password to contain special characters?');

  var includeLowerCaseCharacters = confirm
    ('Would you like your password to contain lowercase characters?');

  var includeUpperCaseCharacters = confirm
    ('Would you like your password to contain uppercase characters?');

  var includeNumbers = confirm 
    ('Would you like your password to contain numbers?');

  if (userChoice =) {
    window.prompt (' Must select at least one password criteria.')
  }
}

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
