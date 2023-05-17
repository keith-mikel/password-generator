// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericalBool;
var lowerCaseBool;
var upperCaseBool;
var passwordLength;
var specialBool;
var password;
var passwordAllowedCharacters;

//All possible Characters
var numericalCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', ',', '.', '/', '<', '>', '?'];



// Write password to the #password input
function writePassword() {

  selectPasswordLength();
  console.log(passwordLength);
 
  functionBool();

  generateAllowedCharacters();
  console.log(passwordAllowedCharacters);

  generatePassword();
  console.log(password)

  passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//Password Length Sequence
function selectPasswordLength() {
passwordLength = window.prompt('Please Enter Your Desired Password Length', 'Select a number between 7 and 128');
  
  if (passwordLength > 128) {
    alert('Please Select A Smaller Number')
    selectPasswordLength()
  }
  else if (passwordLength < 8) {
    alert('Please Select a Larger Number')
    selectPasswordLength()
  }
  else if (7 < passwordLength && passwordLength < 128){
    alert('Password Length Set to ' + passwordLength + ' Characters')
  }
  else {
    alert('Please Select a Number')
    selectPasswordLength()
  };
  
};

//Password Numerical Sequence
function selectPasswordNumerical() {
  numerical = window.prompt('Include Numerical characters?', 'Yes or No');

    if (numerical.toLowerCase() === 'yes') {
      numericalBool = true;
      alert ('Password Will Include Numerical Characters');
    }
    else if (numerical.toLowerCase() === 'no') {
      numericalBool = false;
      alert ('Password Will NOT Include Numerical Characters');
    }
    else{
      alert('Please Select Yes or No');
      selectPasswordNumerical();
    };
};

//Password lowerCase Sequence
function selectPasswordLowercase() {
  lowerCase = window.prompt('Include Lowercase characters?', 'Yes or No');

    if (lowerCase.toLowerCase() === 'yes') {
      lowerCaseBool = true;
      alert ('Password Will Include Lowercase Characters');
    }
    else if (lowerCase.toLowerCase() === 'no') {
      lowerCaseBool = false;
      alert ('Password Will NOT Include Lowercase Characters');
    }
    else{
      alert('Please Select Yes or No');
      selectPasswordLowercase();
    };
};

//Password upperCase Sequence
function selectPasswordUppercase() {
  upperCase = window.prompt('Include Uppercase characters?', 'Yes or No')
  
    if (upperCase.toLowerCase() === 'yes') {
      upperCaseBool = true;
      alert ('Password Will Include Uppercase Characters');
    }
    else if (upperCase.toLowerCase() === 'no') {
      upperCaseBool = false;
      alert ('Password Will NOT Include Lowercase Characters');
    }
    else{
      alert ('Please Enter Yes or No');
      selectPasswordUppercase();
    };
};

//Special characters Sequence
function selectPasswordSpecial() {
  special = window.prompt('Include Special characters?', 'Yes or No')
  
    if (special.toLowerCase() === 'yes') {
      specialBool = true;
      alert ('Password Will Include Uppercase Characters');
    }
    else if (special.toLowerCase() === 'no') {
      specialBool = false;
      alert ('Password Will NOT Include Lowercase Characters');
    }
    else{
      alert ('Please Enter Yes or No');
      selectPasswordSpecial();
    };
};

//Boolean Sequence to include condition if all are false

function functionBool() {

  selectPasswordNumerical();
  console.log('Numerical: ' + numericalBool)

  selectPasswordLowercase();
  console.log('LowerCase: ' + lowerCaseBool);

  selectPasswordUppercase();
  console.log('UpperCase: ' + upperCaseBool);

  selectPasswordSpecial();
  console.log('Special: ' + specialBool);

  if (numericalBool == false && 
    lowerCaseBool == false && 
    upperCaseBool == false && 
    specialBool == false) {
    alert('Please Select Yes for at Least One Type of Character')
    functionBool()
  };
};

function generateAllowedCharacters() {
  var A=[];
  var B=[];
  var C=[];
  var D=[];
  

  if (numericalBool == true) {
    A = A.concat(numericalCharacters);
  }
  if (lowerCaseBool == true) {
    B = B.concat(lowercaseLetters);
  }
  if (upperCaseBool == true) {
    C = C.concat(uppercaseLetters);
  }
  if (specialBool == true) {
    D = D.concat(specialCharacters);
  }

  passwordAllowedCharacters = A.concat(B, C, D);
}

function generatePassword() {

  password = ''

  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * passwordAllowedCharacters.length);
    password += passwordAllowedCharacters[random];
  }

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);