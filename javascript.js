
var allowChars = []
var specChars = "#$%&'()*+,-./:;<=>?@[]^_`{|}~\\\"";
var numChars = "0123456789";
var lowChars = "qwertyuiopasdfghjklzxcvbnm";
var highChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
var passWord = [];
var passWord2 = "";


// var num = Number(prompt("how many characters do you want the password to be?(8-128)"));
while( num < 8 || num > 128) {

         alert("Please select a valid number of characters");
         num = prompt("how many characters do you want the password to be?(8-128)");
         num = Number(num);
     }

// var specConf = confirm("Do you want your password to include special characters?");
// // var numSpec = prompt("What is the minimum number of special characters you want your password to contain?");
// var numConf = confirm("Do you want your password to include numbers?");
// // var numNum = prompt("What is the minimum number of numbers you want your password to contain?");
// var lowConf = confirm("Do you want your password to include lowercase letters?");
// // var lowNum = prompt("What is the minimum number of numbers you want your password to contain?");
// var highConf = confirm("Do you want your password to include uppercase letters?");
// // var highNum = prompt("What is the minimum number of numbers you want your password to contain?");

function sumChars(specConf, numConf, lowConf, highConf, num){
   
    if (specConf === true) {
        //specChars.length=31
        for( i=0 ; i < specChars.length ; i++ ) {
            allowChars.push(specChars.charAt(i));
        }
    }
    if (numConf === true) {
        //numChars.length=10
        for( i=0 ; i < numChars.length ; i++ ) {
            allowChars.push(numChars.charAt(i));
        }
    }
    if (lowConf === true) {
        //lowChars.length=26
        for( i=0 ; i < lowChars.length ; i++ ) {
            allowChars.push(lowChars.charAt(i));
        }
    }
    if (highConf === true) {
        //specChars.length=26
        for( i=0 ; i < highChars.length ; i++ ) {
            allowChars.push(highChars.charAt(i));
        }
    }
    if(specConf === false && numConf === false && lowConf === false && highConf === false){
        alert("Please Refresh And Choose At Least 1 Valid Character Type!")
    }

    return allowChars;
}

function passGen(allowChars, num, passWord){
    passWord = []
    passWord2 = "";
    for(i=0 ; i < num ; i++){
        passWord.push(allowChars[(Math.floor(Math.random()*allowChars.length))]);
    }
    for(i=0 ; i < passWord.length ; i++){
        passWord2 = passWord2 + passWord[i];
    }
    return passWord;
 }


// numCharValid();
sumChars(specConf, numConf, lowConf, highConf);
passGen(allowChars, num, passWord);