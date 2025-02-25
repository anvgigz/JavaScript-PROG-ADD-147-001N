function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs

    document.getElementById("round").innerHTML = ("Demonstration of Math.round(9.5) = ") + Math.round(9.5);

    document.getElementById("ceil").innerHTML = ("Ceil will round the number up no matter how small the decimal point 9.1 = ") +  Math.ceil(9.1);

    document.getElementById("floor").innerHTML = ("floor round down the integer no matter how big the decimal is 9.9 =  ") + Math.floor(9.9);

    document.getElementById("trunc").innerHTML = ("trunc will return only the integer value without rounding (positive, or negative) math.trunc(3.9) = ") +
        Math.trunc(3.9);

    document.getElementById("sign").innerHTML = ("the sign method will either return a -1 for negative number or\
        a positive 1 for a positive number ") + Math.sign(-2);

    document.getElementById("pow").innerHTML = ("The pow method will return the first number to the power of the second number\
        Math.pow(2,3)  = ") + Math.pow(2,3);

    document.getElementById("min").innerHTML = ("The min method will return the smallest number in the list of numbers\
        Math.min(2,6,9,44,66,77,88) = ") + Math.min(2,6,9,44,66,77,88);

    document.getElementById("random").innerHTML = ("the random method will retiurn\
        a random number between 0 and 1 = ") + Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph

   document.getElementById("random2").innerHTML = ("The random number between 1 and 100 is  Math.floor(Math.random() * 101) ") +
    Math.floor(Math.random() * 101);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference
    

    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph

            // Create example variables for comparison
    const num = 5;
    const str = "5";

    // == (loose equality): checks for value equality after type conversion
    const looseEquality = (num == str); // true because "5" is converted to 5

    // === (strict equality): checks for both value and type equality
    const strictEquality = (num === str); // false because 5 (number) is not equal to "5" (string)

    // Display the results and explanation in the "comparisons" paragraph
    document.getElementById("comparisons").innerHTML = 
        "Using == (loose equality): " + num + " == " + str + " results in " + looseEquality + ".<br>" +
        "Using === (strict equality): " + num + " === " + str + " results in " + strictEquality + ".<br>" +
        "Explanation: The == operator checks for value equality after type conversion, " +
        "while the === operator checks for both value and type equality without type conversion.";



    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}