// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");
   
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Array of characters that can be used for password generator 
  // Alphabetical
  var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
  var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
  // Numerical and Special Characters
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialCharacters = [
    "!",
    "@",
    "£",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "<",
    ">",
    "|",
    "/",
    "?",
    "{",
    "}",
    "[",
    "]",
    ":",
    ";",
    "'",
    ",",
    ".",
  ];

// Function for random selection of characters from Array
function  RandomiseCharacter(collection) {
  return collection[Math.floor(Math.random()* collection.length)];
}

// Function for password criteria selection prompts
function generatePassword() {
  var passwordLength = prompt(
    "Please select a number from 8-128 for length of password"
  );
  var validPassword = passwordCriteria(passwordLength);
  if (validPassword) {
    var incUpperCase = confirm(
      "Please click the OK button to confirm use of uppercase alphabetic characters"
    );
    var incLowercase = confirm("Please click the OK button to confirm use of lowercase alphabetic characters");
    var incNumbers = confirm(
    "Please click the OK button to confirm use of numeric characters"
    );
    var incSpecialCharacters = confirm (
    "Please click the OK button to confirm use of special characters"
    );
  }
}  

  // Conditional statement to check if user input has not selected any of the character types which will cause the password generator to fail
 if (
    [incLowercase, incNumbers, incUpperCase, incSpecialCharacters].includes(
      true
    )
  )
// Array of selected character type chosen for password
var selectedCharacter = [];

// Array containing one of each selected character type that will be used in password
var passwordCharacter = [];

// Conditional statment that will add each type of chosen character type based on user input into an array of possible characters that will be used in password and pushes another selection of chosen character type to passwordCharacter
if (incUpperCase) {
  selectedCharacter = selectedCharacter.concat(uppercaseCharacters);
  passwordCharacter.push(
    uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)]
  );
}

if (incLowercase) {
  selectedCharacter = selectedCharacter.concat(lowercaseCharacters);
  passwordCharacter.push(
    lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)]
  );
}

if (incNumbers) {
  selectedCharacter = selectedCharacter.concat(numericCharacters);
  passwordCharacter.push(
    numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
  );
}

if (incSpecialCharacters) {
  selectedCharacter = selectedCharacter.concat(specialCharacters);
  passwordCharacter.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  );
}

// Loop to create password from user input selection, selecting random characters from the array of chosen character types 
var characterRandom = [];
for (var i = 0; i < passwordLength; i++) {
  var index = Math.floor(Math.random() * selectedCharacter.length);
  characterRandom.push(chosenChar[index]);
}

var positionReplace = {};

// Loop for index position to guarantee already used character will be replaced with another character from selected character types
while (passwordCharacter.length > 0) {
  var replaceCharacter = Math.floor(Math.random() * characterRandom.length);
  if (!positionReplace[replaceCharacter]) {

  characterRandom[replaceCharacter]= passwordCharacter.pop();
  positionReplace[replaceCharacter] = true;
  }
}
return characterRandom.join("");
}

// Function for password criteria errors
function passwordCriteria(passwordLength) {
  if (isNaN(passwordLength)) {
    alert("Please enter a number");
    return false;
  } else if (parseInt(passwordLength) < 8) {
    alert("Password length must be between 8-128 characters long");
    return false;
  } else if (parseInt(passwordLength) >= 129) {
    alert("Password length must be between 8-128 characters long");
    return false;
  }
  return true;
}

