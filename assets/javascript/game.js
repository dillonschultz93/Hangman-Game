$(document).ready(function(){

    // == GLOBAL VARIABLES ===========================================

    //An array of possible word choices
    var wordBank = ["helvetica", "arial", "avenir", "courier", "garamond", "baskerville", "didot", "futura", "times", "caslon"];

    //Randomly select a word from the string above
    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    console.log(randomWord); //debugging

    //Keep randomly selected word as underscores here
    var underScores = [];

    //Keep correct guesses here
    var correctAnswer = [];

    //Keep wrong guesses here
    var wrongAnswer = [];

    //Global variable for user input
    var userGuess;

    //Score keeping-----------
    var guessesRemaining = 10;
    //------------------------

    //DOM Manipulation
    var displayUnderscore = document.getElementById("current-word");
    var displayWrongGuess = document.getElementById("letters-guessed");
    var displayScore = document.getElementById("number-of-guesses");

    // == FUNCTIONS & LOGIC ========================================

    //Startup
    var startUp = function () {
        var startMessage = $("#game-start").text("PRESS ANY KEY TO BEGIN");
    };

    //Display the underscored word in the id="current-word"
    function generateUnderscore() {
        for (var i = 0; i < randomWord.length; i++) {
            underScores.push("_");
        }
        return underScores;
    }

    //Detects user input
    document.onkeyup = function(event) {
        var userInput = event.key;
        userGuess = userInput;
        //when the user presses a key remove the "PRESS ANY KEY TO BEGIN"

        //if user's guess is correct...
        if (randomWord.indexOf(userInput) > -1) {
            //add the user's input to the correctAnswer array
            correctAnswer.push(userInput);
            //match the user guess with the underscore
            underScores[randomWord.indexOf(userInput)] = userInput;
            displayUnderscore.innerHTML = underScores.join("");
            //if user's guess is repeated...
            if (randomWord.lastIndexOf(userInput) > -1) {
                //add the user's input to the correctAnswer array
                correctAnswer.push(userInput);
                //match the user guess with the underscore
                underScores[randomWord.lastIndexOf(userInput)] = userInput;
                displayUnderscore.innerHTML = underScores.join("");
            }
            //if the user guesses all of the letters correctly...
            if (underScores.join("") === randomWord) {
                //...then alert them with a win statement
                alert("You win!");
                //*NOTE: ^ I couldn't figure out how to display this after the user pressed the winning key...
            }
        // ...else display the incorrect guess and decrease the remaining guesses by one
        } else {
            wrongAnswer.push(userInput);
            displayWrongGuess.innerHTML = wrongAnswer.join(",")
            guessesRemaining --;
            displayScore.innerHTML = guessesRemaining;
            //if guesses remaining is 5 or less...
            if (guessesRemaining <= 5) {
                //...then display the text as a red color
                $("#number-of-guesses").css("color", "#fc1052");
                $("#number-of-guesses").css("font-weight", "bold");
            }
            //if guesses remaining reach 0
            if (guessesRemaining === 0) {
                //...then alert them that they lost
                alert("Better Luck Next Time!");
            }
        }

    };

    //Display start message
    startUp();
    //Display the underscores and answers
    displayUnderscore.innerHTML = generateUnderscore().join(" ");
    //Display the incorrect answers
    displayWrongGuess.innerHTML = wrongAnswer;
    //Display the score
    displayScore.innerHTML = guessesRemaining;
});
