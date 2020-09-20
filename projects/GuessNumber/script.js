let computerGuess;
let userGuesses = [];
let numAttempts = 0;
let maxAttempts;

function gameEnded(){
    document.getElementById("newGame").style.display = "inline";
    document.getElementById("attemptInput").setAttribute('readonly', 'readonly')
}

function newGame(){
    window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    document.getElementById("newGame").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
    console.log(computerGuess);
}

function startGameView() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

function easyMode() {
    maxAttempts = 10;
    startGameView()
    
}

function hardMode() {
    maxAttempts = 5;
    startGameView()
    
}

function compareGuess() {
    const attempt = Number(document.getElementById("attemptInput").value);
    userGuesses.push(" " + attempt);
    document.getElementById("attempts").innerHTML = userGuesses;

    numAttempts++;
    document.getElementById("numAttempts").innerHTML = numAttempts;

    if (numAttempts < maxAttempts){
        if(attempt > computerGuess){
            document.getElementById("textOutput").innerHTML = "Your guess is too high";
            document.getElementById("attemptInput").value = "";
        }
        else if(attempt < computerGuess){
            document.getElementById("textOutput").innerHTML = "Your guess is too low";
            document.getElementById("attemptInput").value = "";
        }
        else{
            document.getElementById("textOutput").innerHTML = "Correct!!!! You got it in " + numAttempts + " attempts"; 
            gameEnded()
        }
    }
    else{
        if(attempt > computerGuess){
            document.getElementById("textOutput").innerHTML = "YOU LOSE!!! Correct number was: " + computerGuess;
            gameEnded()
        }
        else if(attempt < computerGuess){
            document.getElementById("textOutput").innerHTML = "YOU LOSE!!! Correct number was: " + computerGuess;
            gameEnded()
        }
        else{
            document.getElementById("textOutput").innerHTML = "Correct!!!! You got it in " + numAttempts + " attempts";
            gameEnded()
        }
    }
}