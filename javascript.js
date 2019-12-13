var num = 7;
var specConf = false;
var numConf = false;
var lowConf = false;
var highconf = false;
var allowChars = [];
var specChars = "#$%&'()*+,-./:;<=>?@[]^_`{|}~\\\"";
var numChars = "0123456789";
var lowChars = "qwertyuiopasdfghjklzxcvbnm";
var highChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
var passWord = [];
var passWord2 = "";

function numGet() {
    var num = Number(document.getElementById("numId").value);
    if( num < 8 || num > 128) {

        alert("Please select a valid number of characters");
        
        // num = prompt("how many characters do you want the password to be?(8-128)");

    }
    return num;
}

// function numGet() {
//     var num = Number(document.getElementById("numId").value);
//     while( num < 8 || num > 128) {

//         alert("Please select a valid number of characters");
//         window.location.reload(false); 
        
//         // num = prompt("how many characters do you want the password to be?(8-128)");

//     }
//     return num;
// }

// var num = Number(prompt("how many characters do you want the password to be?(8-128)"));

// var specConf = confirm("Do you want your password to include special characters?");
// // var numSpec = prompt("What is the minimum number of special characters you want your password to contain?");
// var numConf = confirm("Do you want your password to include numbers?");
// // var numNum = prompt("What is the minimum number of numbers you want your password to contain?");
// var lowConf = confirm("Do you want your password to include lowercase letters?");
// // var lowNum = prompt("What is the minimum number of numbers you want your password to contain?");
// var highConf = confirm("Do you want your password to include uppercase letters?");
// // var highNum = prompt("What is the minimum number of numbers you want your password to contain?");

// var specConf = document.getElementById("specConf").checked;
// var numConf = document.getElementById("numConf").checked;
// var lowConf = document.getElementById("lowConf").checked;
// var highConf = document.getElementById("highConf").checked;

function sumChars(){
   
    var specConf = document.getElementById("specConf").checked;
    var numConf = document.getElementById("numConf").checked;
    var lowConf = document.getElementById("lowConf").checked;
    var highConf = document.getElementById("highConf").checked;

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
        alert("Please Refresh And Choose At Least 1 Valid Character Type")
    }

    return allowChars, passWord ;
}

function passGen(allowChars, num, passWord, passWord2){
    passWord = [];
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
// sumChars(specConf, numConf, lowConf, highConf);
// passGen(allowChars, num, passWord);
numGet()
sumChars();
passGen(allowChars, num, passWord);