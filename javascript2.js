function numGet() {
    var num = 7;
    var specConf = false;
    var numConf = false;
    var lowConf = false;
    var highConf = false;
    var allowChars = [];
    var specChars = "#$%&'()*+,-./:;<=>?@[]^_`{|}~\\\"";
    var numChars = "0123456789";
    var lowChars = "qwertyuiopasdfghjklzxcvbnm";
    var highChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var passWord = [];
    var passWord2 = "";


    var num = Number(document.getElementById("numId").value);
    if( num < 8 || num > 128) {

        alert("Please select a valid number of characters");
        

    }
   
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
        alert("Please Choose At Least 1 Valid Character Type")
    }

    for(i=0 ; i < num ; i++){
        passWord.push(allowChars[(Math.floor(Math.random()*allowChars.length))]);
    }
    for(i=0 ; i < passWord.length ; i++){
        passWord2 = passWord2 + passWord[i];
    }
    alert(passWord2);
    return passWord2;
 }