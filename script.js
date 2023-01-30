
function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISORS"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

function playRound(playerChoice, computerChoice) {
    const playerChoiceUpper = playerChoice.toUpperCase();
    
    let alert = ""

    // When the user wins, result = 1, when the computer wins result = 2, else result = 0
    let result = 0

    switch (true) {

        case (playerChoiceUpper === "ROCK" && computerChoice === "PAPER") :
            alert = "You Lose the round! Paper beats Rock";
            result = 2;
            break;
        
        case (playerChoiceUpper === "ROCK" && computerChoice === "SCISORS") :
            alert = "You Win the round! Rock beats Scisors";
            result = 1;
            break;
        
        case (playerChoiceUpper === "PAPER" && computerChoice === "ROCK") :
            alert = "You Win the round! Paper beats Rock";
            result = 1;
            break;

        case (playerChoiceUpper === "PAPER" && computerChoice === "SCISORS") :
            alert = "You Lose the round! Scisors beats Paper";
            result = 2;
            break;

        case (playerChoiceUpper === "SCISORS" && computerChoice === "ROCK") :
            alert = "You Lose the round! Rock beats Scisors";
            result = 2;
            break;

        case (playerChoiceUpper === "SCISORS" && computerChoice === "PAPER") :
            alert = "You Win the round! Scisors beats Paper";
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

const playerChoice = "rock"
const computerChoice = getComputerChoice()
console.log(playRound(playerChoice, computerChoice))