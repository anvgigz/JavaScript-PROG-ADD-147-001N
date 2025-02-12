function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Stephen Krohn"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
       let x = 15;
       let y = 25;
       let z = "35";
       let result = x + y + z;
       document.getElementById("add").innerHTML = "(integer 15 + 25) + (string 35) = " + result;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
        let num = 1234;
            let numStr = num.toString();
            document.getElementById("to-string").innerHTML = "123 as a string " + numStr;

    // Demonstrate the use of toExponential() and print to the exponent paragraph
        let number = 12345.6789;
        let expStr = number.toExponential(2);
        document.getElementById("exponent").innerHTML = expStr;

    // Demonstrate the use of toFixed() and print to the fixed paragraph
        let numtofixed = 123.456789;
        let fixedStr = numtofixed.toFixed(2);
        document.getElementById("fixed").innerHTML = fixedStr;

    // Demonstrate the use of toPrecision() and print to the precision paragraph
        let numtoprecision = 123.456789;
        let precisionStr = numtoprecision.toPrecision(4);
        document.getElementById("precision").innerHTML = precisionStr;

    // Demonstrate the use of parseFloat() and print to the float paragraph
        let str = "123.456";
        let floatNum = parseFloat(str);
        document.getElementById("float").innerHTML = floatNum;

    // Demonstrate the use of parseInt() and print to the int paragraph
        let strINT = "123.456";
        let intNum = parseInt(strINT);
        document.getElementById("int").innerHTML = intNum;


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
        let equalsParagraph = `
        The double equals (==) operator performs type conversion before comparing two values. This means that if
        the values are of different types, JavaScript will attempt to convert them to the same type before comparing.
        For example, the comparison (1 == '1') will return true because the string '1' is converted to the number 1
        before comparison.

        The triple equals (===) operator, on the other hand, does not perform type conversion. It compares both the
        value and the type. For example, the comparison (1 === '1') will return false because the number 1 and the
        string '1' are of different types.

        In general, it is recommended to use the triple equals (===) operator to avoid unintended type conversion
        and ensure a strict comparison.
        `;

        document.getElementById("equals").innerHTML = equalsParagraph;

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
        let logicParagraph = `
        In JavaScript, the logical AND (&&) and logical OR (||) operators have different levels of precedence when evaluating expressions.

        1. **Logical AND (&&) Operator:**
        The logical AND operator has higher precedence than the logical OR operator. This means that in expressions where both && and || operators are used, the && operators will be evaluated before the || operators. For example:
        true && false || true // evaluates to true

        2. **Logical OR (||) Operator:**
        The logical OR operator has lower precedence than the logical AND operator. It will be evaluated after the && operators in expressions where both are present. For example:
        true || false && false // evaluates to true

        3. **Grouping with Parentheses:**
        You can use parentheses to group expressions and control the order of evaluation explicitly. Expressions inside parentheses will be evaluated first. For example:
        (true || false) && false // evaluates to false
        `;

        document.getElementById("logic").innerHTML = logicParagraph;


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragraph
    let day = 3;
    let dayName;

    switch (day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day";
    }

    document.getElementById("switch").innerHTML = "Today is " + dayName

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
        let age = 20;
        let canVote = (age >= 18) ? "Yes, you can vote." : "No, you are too young to vote.";
        document.getElementById("ternary").innerHTML = canVote;
}