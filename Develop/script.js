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
  var lenth = parseInt(
    prompt ('How many characters would like your password to contain?'
      
    )
  );

  if (length < 8) {
    alert('Password length must be a minimum of 8 characters');
    return null;
  }

  if (length > 128) {
    alert ('Password length cannot exceed 129 characters'); 
    return null;
  }
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
