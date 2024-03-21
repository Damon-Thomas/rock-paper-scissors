
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
function playerSelection() {
    let playerChoice = prompt("Rock, Paper, or Scissors");
    playerChoice = playerChoice.toLowerCase();
    if ((playerChoice === ("rock")) || (playerChoice === ("paper")) || (playerChoice === ("scissors"))) {
        return playerChoice;}
    else {
        console.log("Invalid Input")
        playerSelection()
    }  
}

 // result of game loss 0, win 1, tie 2
function playerWins(userInput, computerInput) {
    if (userInput === computerInput) {
        return 2}
    else if 
      ((userInput === "rock" && computerInput === "scissors") || 
      (userInput === "paper" && computerInput === "rock") || 
      (userInput === "scissors" && computerInput === "paper")) {
        return (1);
    }
    else {
        return 0
    }   
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

//Operates the game
function playGame() {
    userInput = playerSelection();
    computerInput = getComputerChoice();
    gameResult = playerWins(userInput, computerInput);
    let winningInput;
    if (gameResult == 0) {
        computerScore += 1
        winningInput = computerInput;}
    else if (gameResult == 1) {
        userScore += 1
        winningInput = userInput;}
    console.log(userResponse(gameResult, winningInput));
}
let userScore = 0;
let computerScore = 0;
//playgame 5 times
function letsPlay() {
    userScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; ++i) {
        playGame();}
    if (userScore > computerScore) {
        let playAgain = prompt("You Win! Play again y/n?");
        if (playAgain === "y") {
            letsPlay()}}
    else if (userScore < computerScore) {
        let playAgain = prompt("You Lose! Play again y/n?");
        if (playAgain === "y") {
            letsPlay()}}
    else {
        let playAgain = prompt("Tie! Play again y/n?");
        if (playAgain === "y") {
            letsPlay()}}
}

letsPlay()