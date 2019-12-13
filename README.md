## Password Generator
    This password generator generates a random password after taking criteria from the user input on a form. The site only generates a password if the users inputs meet 2 criteria: 
        1. The user selects a number for password length between 8 and 128
        2. The user chooses at least 1 acceptable character type


## Index
    index.html is the html source for the Password Generating webpage. This main page loads black and provides a form for the user to type the number of characters they want in their password(between 8 and 128) as well as toggle the inclusion of any of the 4 types of characters available characters (special, numbers, lowercase letters, and uppercase letters). Index.html is built with several bootstrapped elements and linking with javascript2.js and style.css. javascript.js is a legacy file for the purpose of showing the general outline which I ended up converting into the more streamlined javascript2.js. When the user selects "Generate Password" the function numGet() in javascript2.js checks to make sure the users input is valid and generates a password if the input is valid. If the user does not input valid arguments they will be given instructions as to what information they need to submit.

## Javascript
    The coding process began with javascript.js. Once each function had been tested individually I compiled them into javascript2.js during the integration process between index.html and my javascript functions. javascript2.script does all the heavy lifting for the functionality of the code aside from the responsiveness, which is provided primarily by the javascript library linking provided to support bootstrap.

## CSS
    style.css makes very minor style changes to the elements within the header. Responsiveness is sufficient to pixel sizes as small as roughly 506px so no media queries were necessary. Styling options provided by the boostrapped elements were sufficient for the design specs outlined in the instructions provided.