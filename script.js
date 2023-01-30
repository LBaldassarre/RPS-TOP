
function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISORS"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

function round(playerChoice) {
    let computerChoice = getComputerChoice();
    let playerChoiceUpper = playerChoice.toUpperCase();
    
    let alert = ""

    // When the user wins, result = 1, when the computer wins result = 2, else result = 0
    let result = 0

    switch (true) {

        case (playerChoiceUpper === "ROCK" && computerChoice === "PAPER") :
            alert = "You Lose! Paper beats Rock";
            result = 2;
            break;
        
        case (playerChoiceUpper === "ROCK" && computerChoice === "SCISORS") :
            alert = "You Win! Rock beats Scisors";
            result = 1;
            break;
        
        case (playerChoiceUpper === "PAPER" && computerChoice === "ROCK") :
            alert = "You Win! Paper beats Rock";
            result = 1;
            break;

        case (playerChoiceUpper === "PAPER" && computerChoice === "SCISORS") :
            alert = "You Lose! Scisors beats Paper";
            result = 2;
            break;

        case (playerChoiceUpper === "SCISORS" && computerChoice === "ROCK") :
            alert = "You Lose! Rock beats Scisors";
            result = 2;
            break;

        case (playerChoiceUpper === "SCISORS" && computerChoice === "PAPER") :
            alert = "You Win! Scisors beats Paper";
            result = 1;
            break;
        
        default:
            alert = "Thats a Tie!"
            result = 0;
            break;
    }

    console.log(alert)
    console.log("Youre choice: " + playerChoiceUpper + ", the computer choice: " + computerChoice)

    return result
}

console.log(round("scisors"))