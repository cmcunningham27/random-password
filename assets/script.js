// Assignment Code
var generateBtn = document.querySelector("#generate");

var message = document.getElementsByTagName("textarea");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = upper.toLowerCase;
var numbers = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want in your password. It must have at least 8 and no more than 128.");

    var length = parseInt(passwordLength);
    console.log(length);

    if (passwordLength < 8 || passwordLength > 128) {
      console.log(passwordLength);
      generatePassword();
    };
    var upperCase = confirm("Would you like upper case letters in your password?");
    var lowerCase = confirm("Would you like lower case letters in your password?");
    var number = confirm("Would you like numbers in your password?");
    var special = confirm("Would you like special characters in your password?");

    if (!upperCase && !lowerCase && !number && !special) {
      var error = confirm("You must pick at least one criteria to create your password (uppercase, lowercase, numbers, or special.");
      if (error) {
        generatePassword();
      }
    };

    if (upperCase) {
        console.log(upperCase);
    };
    if (lowerCase) {
        console.log(lowerCase);
    }; 
    if (number) {
        console.log(number);
    }; 
    if (special) {
        console.log(special);
    };
}