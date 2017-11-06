window.onload = function() {
    //-- Array of possible words that can be chosen --
    var wordChoices = ["helvetica", "arial", "avenir", "courier", "garamond", "baskerville", "didot", "futura"];

    //-- Randomly select a word from the string above --
    var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    //debugging
    console.log(randomWord);

    //-- Display the randomly picked string as underscores --
    var displayedWord = [];

    for (i = 0; i < randomWord.length; i++){
        displayedWord[i] = "_";
    }

    var elCurrentWord = document.getElementById("current-word");
    elCurrentWord.innerHTML = displayedWord;
    elCurrentWord.innerHTML = displayedWord.join(" ");

    //-- Reveal the letters as the user guesses correctly --
    document.onkeyup = function(event) {
        var userInput = event.key;
        //debugging
        console.log(userInput);
        if (userInput === randomWord[0] || userInput === randomWord[1] || userInput === randomWord[2] || userInput === randomWord[3] || userInput === randomWord[4] || userInput === randomWord[5] || userInput === randomWord[6] || userInput === randomWord[7] || userInput === randomWord[8] || userInput === randomWord[9] || userInput === randomWord[10]) {
            //debugging
            console.log(true);
        } else {
            //debugging
            console.log(false);
        }
    };
}
