// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declaring all the variables for the four different criteria the user can choose from
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

//function that takes users inputs, validates them, and uses them to create a random password
function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want in your password. It must have at least 8 and no more than 128.");
    //Turns the User input into an integer for the password length
    var length = parseInt(passwordLength);
    console.log(length);

    while (passwordLength < 8 || passwordLength > 128) {
      console.log(passwordLength);
      passwordLength = prompt("Please enter the number of characters you want in your password. It must have at least 8 and no more than 128.");
    };

    //confirms for all the criteria the user can choose from
    var upperCase = confirm("Would you like upper case letters in your password?");
    var lowerCase = confirm("Would you like lower case letters in your password?");
    var number = confirm("Would you like numbers in your password?");
    var special = confirm("Would you like special characters in your password?");

    //This provides a reminder confirm for the user to how many characters they can choose
    while (!upperCase && !lowerCase && !number && !special) {
         alert("You must pick at least one criteria to create your password (uppercase, lowercase, numbers, or special.");
         upperCase = confirm("Would you like upper case letters in your password?");
         lowerCase = confirm("Would you like lower case letters in your password?");
         number = confirm("Would you like numbers in your password?");
         special = confirm("Would you like special characters in your password?");
    };

    //Declare an empty Array that will have criteria values plugged in when user chooses them
    var pswArray = [];

    //if user chooses upper case letters in their password, the string will be pushed to the empty Array
    if (upperCase) {
        pswArray.push(upper);
        console.log(pswArray);
    };
    //if user chooses lower case letters in their password, the string will be pushed to the empty Array
    if (lowerCase) {
        pswArray.push(lower);
        console.log(pswArray);
    }; 
    //if user chooses numbers in their password, the string will be pushed to the empty Array
    if (number) {
        pswArray.push(numbers);
        console.log(pswArray);
    }; 
    //if user chooses special characters in their password, the string will be pushed to the empty Array
    if (special) {
        pswArray.push(specialChar);
        console.log(pswArray);
    };

    //loop to find random characters within the chosen main Array to be used in the password until all of the password length has been filled
    for (var i = 0; i < passwordLength; i++) {

        let mainArrayNumber;
        let randomCriteriaArray;
        let randomCriteriaArrayNum;
        let randomCharacter;

        //produces a random number from the 4 part main Array either 0,1,2,or 3
        mainArrayNumber = Math.floor(Math.random() * pswArray.length);
        console.log(mainArrayNumber);

        //chooses which array within the main array was chosen by plugging in the number into pswArrays array box "[]"
        randomCriteriaArray = pswArray[mainArrayNumber];
        console.log(randomCriteriaArray);

        //produces a random number from the total length of the smaller array that was chosen
        randomCriteriaArrayNum = Math.floor(Math.random() * randomCriteriaArray.length);
        console.log(randomCriteriaArrayNum);

        //chooses which character from the maller array will be used in the password
        randomCharacter = randomCriteriaArray[randomCriteriaArrayNum];
        console.log(randomCharacter);
    }
};