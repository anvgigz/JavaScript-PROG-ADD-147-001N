function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Stephen Krohn";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."
    let length = myString.length;
    document.getElementById("length").innerHTML = length;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let singlebackslash = "do this for  \"the ability to add quotes\"";
    let singlequotewithbackslash = 'for single quotes like (It\'s) or (that\'s) use a single backslash like the first example';
    let backslash = "the character \\ allows you to excape characters";

    document.getElementById("escape").innerHTML = singlebackslash + "<br>" + singlequotewithbackslash + "<br>" + backslash;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    let name = "Stephen Carl Krohn";

    // Use the JavaScript slice function to display your first name to first paragraph
    let firstName = name.slice(0, 7);
    document.getElementById("first").innerHTML = firstName;

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let middleName = name.slice(8, 12);
    document.getElementById("middle").innerHTML = middleName;

    // Use the JavaScript subst Method to display your last name to the last paragraph
    let lastName = name.slice(13);
    document.getElementById("last").innerHTML = lastName;


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College"
    let major1 = major.replace("Physical Therapy", "Data Science");
    document.getElementById("major").innerHTML = major1;

    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let myText1 = myText.toUpperCase();
    document.getElementById("upper").innerHTML = myText1;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trimtext1 = trimText.trim();
    document.getElementById("trim").innerHTML = trimtext1;

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let index = months.indexOf("May");
    document.getElementById("index").innerHTML = index;


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = "Stephen";
    let last = "Krohn";

    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    document.getElementById("greeting").innerHTML = "Hello my name is " + first + " " + last + " welcome to my page";
}