var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var guessesSoFar = [];

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("user guess: " + userGuess);
    console.log("comp guess: " + computerGuess);

    guessesSoFar.push(userGuess);
    console.log("guesses so far: " + guessesSoFar)

    if (userGuess == computerGuess) {
        wins++;
        guessesSoFar = [];
        guessesLeft = 9;
        return;
    } else if ((userGuess != computerGuess) && (guessesLeft > 0)) {
        guessesLeft--;
    } else {
        losses++;
        guessesSoFar = [];
    }
    
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses-left").textContent = guessesLeft;
    document.getElementById("guesses-so-far").textContent = guessesSoFar;
    
    // {
    //     guessesLeft--;
    //     if (guessesLeft = 0) {
    //         losses++;
    //     }
    // }


    console.log(guessesLeft);
}
    // } else {
    //     guessesLeft--;
    // }

    // if (guessesSoFar.length = 9) {
    //     losses++;
    //     guessesSoFar = [];
    // }
    
    // if (guessesLeft = 0) {
    //     losses++;
    //     guessesLeft = 9;
    //     guessesSoFar = [];
    // }


// }