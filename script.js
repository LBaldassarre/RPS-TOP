
function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISORS"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}