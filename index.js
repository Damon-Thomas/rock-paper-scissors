
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
    roundResult = response
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
    return (`Current Scores = Player: ${userScore}   Computer: ${computerScore}   Ties: ${ties}`)
}


//Operates the game
function playGame(selection) {
    userInput = selection;
    computerInput = getComputerChoice();
    gameResult = getWhoWins(userInput, computerInput);
    updateScore(gameResult);
    console.log(userResponse(gameResult, winningInput));
    console.log(currentScore());
}

// Variables used by multiple functions
let userScore = 0;
let computerScore = 0;
let ties = 0;
let winningInput = "";
let roundResult = ""

// result of game in string
function finalResult(){
    if (userScore > computerScore) {
        return ("You Win! Select Rock, Paper, or Scissors to Play Again!");
        // playAgain(play)
    }
    else if (userScore < computerScore) {
        return ("You Lose! Select Rock, Paper, or Scissors to Play Again!");
        // playAgain(play)
    }
    else {
        return ("Tie! Select Rock, Paper, or Scissors to Play Again!");
        // playAgain(play)
    }}


function playAgain() {
    resetScores();
    }

// uses buttons to guide game
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        playGame(button.id);
        paragraphItem.textContent = roundResult;
        spanItem.textContent = currentScore();
        if (userScore >= 5 || computerScore >= 5) {
            paragraphItem.textContent = finalResult()
            playAgain();
        }
    });
})

const results = document.querySelector(".results");
const paragraphItem = document.createElement("p");
const spanItem = document.createElement("span")
results.append(paragraphItem);
results.append(spanItem);



