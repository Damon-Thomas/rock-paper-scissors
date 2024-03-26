
// Get computer's random choice 
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice < 1) {
        return "rock";}
    else if (choice < 2) {
        return "paper";}
    else if (choice < 3) {
        return "scissors";}
    else {
        return "internal error";}
}


//request user choice and prep for comparison
function getPlayerSelection() {
    let playerChoice = prompt("Rock, Paper, or Scissors");
    playerChoice = playerChoice.toLowerCase();
    if ((playerChoice === ("rock")) || (playerChoice === ("paper")) || (playerChoice === ("scissors"))) {
        return playerChoice;}
    else {
        console.log("Invalid Input");
        getPlayerSelection();
    }  
}

 // result of game loss 0, win 1, tie 2
function getWhoWins(userInput, computerInput) {
    result = 2;
    if (userInput === computerInput) {
        winningInput = "";
        result = 2;
        }
    else if 
      ((userInput === "rock" && computerInput === "scissors") || 
      (userInput === "paper" && computerInput === "rock") || 
      (userInput === "scissors" && computerInput === "paper")) {
        winningInput = userInput;
        result = 1;
    }
    else {
        winningInput = computerInput
        result = 0;
    } 
    return result;  
}

//Generate string for user
function userResponse(outcome, winningInput){
    let response;
    if (outcome == 2) {
    return ("It's a tie!");}
    else if (outcome == 1) {
        response = "You Win! ";}
    else {
        response = "You Lose! ";}
    if (winningInput === "rock") {
        response = response + "Rock beats Scissors";}
    else if (winningInput === "paper") {
        response = response + "Paper beats Rock";}
    else if (winningInput === "scissors") {
        response = response + "Scissors beats Paper";}
    return(response)
}

// Add score 
function updateScore(result) {
    if (result == 2){
        ties += 1;}
    else if (result == 1){
        userScore += 1;}
    else if (result == 0){
        computerScore += 1;}
}

// Reset scores to 0
function resetScores() {
    userScore = 0;
    computerScore = 0;
    ties = 0;
}

// report score
function currentScore() {
    console.log(`Current Scores = Player: ${userScore}   Computer: ${computerScore}   Ties: ${ties}`);
}


//Operates the game
function playGame() {
    userInput = getPlayerSelection();
    computerInput = getComputerChoice();
    gameResult = getWhoWins(userInput, computerInput);
    updateScore(gameResult);
    console.log(userResponse(gameResult, winningInput));
    console.log(currentScore());
}

let userScore = 0;
let computerScore = 0;
let ties = 0;
let winningInput = "";


function finalResult(){
    if (userScore > computerScore) {
        let play = prompt("You Win! Play again y/n?");
        playAgain(play)}
    else if (userScore < computerScore) {
        let play = prompt("You Lose! Play again y/n?");
        playAgain(play)}
    else {
        let play = prompt("Tie! Play again y/n?");
        playAgain(play)}}


function playAgain(prompt) {
    if (prompt === "y") {
        resetScores();
        letsPlay();}}

// playgame 5 times
// function letsPlay() {
//     for (let i = 0; i < 5; ++i) {
//         playGame();}
//     finalResult()
// }

// letsPlay();