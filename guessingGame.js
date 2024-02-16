/*
    @Author Shazwar Mohammed
    @Date 02/16/2024
    This is a guessing game that allows you to guess up to 10 times 
    or until you guess the right number between 1 and 100. After each
    turn the player will be notified whether their guess was right or
    wrong, whether they were too high or too low, and what numbers they previously 
    guessed. The game will end once the 10 turns run out or if they guess the right
    number. The player is allowed to restart the game at the end.
*/ 


//random number generator
let randomNumber = Math.floor(Math.random() * 100) + 1; // returns a number between 1 and 100
let turns = 10;
let guessedNumber = [];


function startGame(){

    //reset the game
    randomNumber = Math.floor(Math.random() * 100) + 1; // select a random number
    turns = 10;
    guessedNumber = [];
    displayMessage("We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer.");
    

}

function guessNumber(){

    let userInput = document.getElementById("output").value; //
    let outputMessage ="";

    

    if (userInput == randomNumber) {
        displayMessage("Congratulations! You guessed the correct number: " + randomNumber);
        endGame();
    } else {
        
        let hint = (userInput < randomNumber) ? "too low." : "too high.";
        outputMessage = "Wrong guess! The number is " + hint;

        
        if (turns > 0) {
            outputMessage += " You have " + turns + " turns left.";
        } else {
            outputMessage += " Sorry, you have used all your turns. The correct number was " + randomNumber;
            endGame();
        }
        turns--;
        guessNumber.push(userInput);
        displayMessage(outputMessage);
    }

}

function displayMessage(message) {
    document.getElementById("output").innerHTML += "<p>" + message + "</p>"; //write in html
}



function endGame() {
    let playAgain = confirm("Play again?");
    if (playAgain) {
        startGame();
    } else {
        displayMessage("Thank you for playing!");
        
    }
}


