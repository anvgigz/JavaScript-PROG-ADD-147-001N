// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

let beerSong = "";
for (let bottlesCount = 99; bottlesCount > 0; bottlesCount--) {
    if (bottlesCount > 1) {
        beerSong += `${bottlesCount} bottles of beer on the wall, ${bottlesCount} bottles of beer. Take one down, pass it around, ${bottlesCount - 1} bottles of beer on the wall.<br>`;
    } else {
        beerSong += `${bottlesCount} bottle of beer on the wall, ${bottlesCount} bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.<br>`;
    }
}
beerSong += `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.<br>`;

document.getElementById("beer").innerHTML = beerSong;



// for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthsText = "";
for (let index in months) {
    monthsText += months[index] + "<br>";
}
document.getElementById("for-in").innerHTML = monthsText;

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

const myString = "HelloWorld";
let lettersText = "";
for (let letter of myString) {
    lettersText += letter + "<br>";
}
document.getElementById("for-of").innerHTML = lettersText;

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let numbersText = "";
let number = 1;
while (number <= 50) {
    numbersText += number + "<br>";
    number++;
}
document.getElementById("while").innerHTML = numbersText;