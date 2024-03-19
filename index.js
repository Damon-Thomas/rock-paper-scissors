
// Get computer's random choice between 0-2
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
console.log(getComputerChoice());
//request user choice and prep for comparison
function playerSelection() {
    let player_choice = prompt("Rock, Paper, or Scissors");
    return player_choice.toLowerCase();
}

console.log(playerSelection());