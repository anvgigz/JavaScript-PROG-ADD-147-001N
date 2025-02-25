let targetNumber = Math.floor(Math.random() * 1000) + 1;

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    const feedback = document.getElementById("feedback");
    const difference = Math.abs(targetNumber - guess);

    if (difference === 0) {
        feedback.textContent = "Congratulations! You've guessed the number!";
        feedback.style.color = "green";
    } else if (difference <= 10) {
        feedback.textContent = "Boiling hot!";
        feedback.style.color = "red";
    } else if (difference <= 50) {
        feedback.textContent = "Hot!";
        feedback.style.color = "orange";
    } else if (difference <= 100) {
        feedback.textContent = "Warm!";
        feedback.style.color = "yellow";
    } else if (difference <= 200) {
        feedback.textContent = "Cold!";
        feedback.style.color = "lightblue";
    } else {
        feedback.textContent = "Freezing cold!";
        feedback.style.color = "blue";
    }
}

// Attach the event listener to the button
document.getElementById("guessButton").addEventListener("click", checkGuess);
