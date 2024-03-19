
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
    let player_choice = prompt("Rock, Paper, or Scissors");
    return player_choice.toLowerCase();
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
console.log(playerWins(getComputerChoice(), playerSelection()))