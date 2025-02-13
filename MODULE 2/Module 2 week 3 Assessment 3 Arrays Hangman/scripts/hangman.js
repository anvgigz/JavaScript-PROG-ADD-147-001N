// declare and initialize array
let game = ["COBOL", "JAVA", "PYTHON", "JAVASCRIPT", "C#", "RUBY", "PHP", "SWIFT", "KOTLIN", "GO"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
let lettersGuessed = [];


function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}
function updateHangmanImage() {
    const hangmanImages = [
        "images/01.png",
        "images/02.png",
        "images/03.png",
        "images/04.png",
        "images/05.png",
        "images/06.png",
        "images/07.png"
    ];

    let imageIndex = 6 - attemptsLeft;
    if (imageIndex >= hangmanImages.length) {
        imageIndex = hangmanImages.length - 1;
    }

    document.getElementById("hangman").src = hangmanImages[imageIndex];
}


// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null
    
    lettersGuessed.push(userLetter.toUpperCase()); 
    document.getElementById("guessed").innerHTML = "Letters already guessed" + lettersGuessed.join(", ");
    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        let found = false;
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }

        output = output + display[c] + ' ';
    }
    if (found == false) {
        attemptsLeft--;
        updateHangmanImage(); // Update the hangman image
    }
    
    document.getElementById("word").innerHTML = output;
    output = '';
    

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
});


//scirpt connected fine somereason the button and the script are not registering.