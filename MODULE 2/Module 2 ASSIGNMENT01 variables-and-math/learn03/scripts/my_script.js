// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

// const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    
    var firstName = "Meredith",
        lastName = "Engel";
    const taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Ory"
    document.getElementById("dog1-2").innerHTML = dog2;
}


function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
    
}


function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 1 + 1;
    document.getElementById("addition").innerHTML = "1 + 1  = " + addition;
    let subtraction = 1 - 1;
    document.getElementById("subtraction").innerHTML = "1 - 1 = " + subtraction;
    let multiplication = 1 * 2;
    document.getElementById("multiplication").innerHTML = "1 * 2 = " + multiplication;
    let exponent = 2 ** 3;
    document.getElementById("exponent").innerHTML = "2 ** 3 = " + exponent;
    let division = 2 / 2;
    document.getElementById("division").innerHTML = "2 / 2 = " + division;
    modulus = 5 % 2;
    document.getElementById("modulus").innerHTML = "5 % 2 = " + modulus;
    let increment = 2;
    increment++;
    document.getElementById("increment").innerHTML = "2 incremented by 1 (1++) = " + increment;
    let decrement = 2;
    decrement--;
    document.getElementById("decrement").innerHTML = "2 decremented by 1 (1--) = " + decrement;

}



function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10" + "x = " + x;
    x += 1;
    document.getElementById("plus-equals").innerHTML = "x += 1 " + "x = " + x + " x is now assigned to  11";
    x -= 2;
    document.getElementById("minus-equals").innerHTML = "x -= 2 " + "x = " + x +" x is now assigned to 9";
    x *= 2;
    document.getElementById("times-equals").innerHTML = "x *= 2 " + "x = " + x + " x is now assigned to 18";
    x /= 2;
    document.getElementById("divide-equals").innerHTML = "x /= 2" + "x = " + x + "x is now assigned to 9";
    x %= 4;
    document.getElementById("modulus-equals").innerHTML = "x %= 4" + "x = " + x + "x is now assigned to 1";
}



function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const dogs = ["Brittany", "German Shepard", "Border Collie"];
    document.getElementById("array").innerHTML = dogs;
    const Brittany = {Name: "sorry thats Private might be someones security word one day", Age:"2", Color: "Brown and White", eyeColor: "light Brown"};
    document.getElementById("object").innerHTML = "my dogs name is " + Brittany.Name
     + " But I will tell you she is a Brittany" + " She is " + Brittany.Age + 
     " years old. Her coat is " + Brittany.Color + " and her eyes are " + Brittany.eyeColor +".";
    }
