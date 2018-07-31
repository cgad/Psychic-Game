var randomLetter;

function generateLetter() {
    var letterNumber = Math.floor(Math.random() * 26);
    console.log(letterNumber);

    if (letterNumber == 0) {
        randomLetter = "a";
    }
    else if (letterNumber == 1) {
        randomLetter = "b";
    }
    else if (letterNumber == 2) {
        randomLetter = "c";
    }
    else if (letterNumber == 3) {
        randomLetter = "d";
    }
    else if (letterNumber == 4) {
        randomLetter = "e";
    }
    else if (letterNumber == 5) {
        randomLetter = "f";
    }
    else if (letterNumber == 6) {
        randomLetter = "g";
    }
    else if (letterNumber == 7) {
        randomLetter = "h";
    }
    else if (letterNumber == 8) {
        randomLetter = "i";
    }
    else if (letterNumber == 9) {
        randomLetter = "j";
    }
    else if (letterNumber == 10) {
        randomLetter = "k";
    }
    else if (letterNumber == 11) {
        randomLetter = "l";
    }
    else if (letterNumber == 12) {
        randomLetter = "m";
    }
    else if (letterNumber == 13) {
        randomLetter = "n";
    }
    else if (letterNumber == 14) {
        randomLetter = "o";
    }
    else if (letterNumber == 15) {
        randomLetter = "p";
    }
    else if (letterNumber == 16) {
        randomLetter = "q";
    }
    else if (letterNumber == 17) {
        randomLetter = "r";
    }
    else if (letterNumber == 18) {
        randomLetter = "s";
    }
    else if (letterNumber == 19) {
        randomLetter = "t";
    }
    else if (letterNumber == 20) {
        randomLetter = "u";
    }
    else if (letterNumber == 21) {
        randomLetter = "v";
    }
    else if (letterNumber == 22) {
        randomLetter = "w";
    }
    else if (letterNumber == 23) {
        randomLetter = "x";
    }
    else if (letterNumber == 24) {
        randomLetter = "y";
    }
    else {
        randomLetter = "z";
    }

    console.log(randomLetter);
}

generateLetter();

var playerGuess = prompt("Take a guess by typing one letter, then press 'ok'");
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;

// for (var guessesLeft = 10; guessesLeft > 0; guessesLeft--) {
    
//     if (playerGuess === randomLetter) {
//         wins = wins + 1;
//         guessesLeft = 10;
//         console.log(wins);
//     }
//     else {
//         console.log(playerGuess);
//     }
// }

if (playerGuess === randomLetter) {
    wins = wins + 1;
    guessesLeft = 10;
    console.log(wins);
    console.log(guessesLeft);
}
else {
    guessesLeft = guessesLeft - 1;
    console.log(guessesLeft);
    console.log(losses);
    playerGuess = prompt("Guess again");
    if (playerGuess != randomLetter) {
        
    }
}