// Game functions
function getComputerChoice() {
    let choices = [0, 1, 2];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

function playRound(playerChoice, computerChoice) {
    const playerChoiceUpper = playerChoice.toUpperCase();
    const computerChoiceUpper = computerChoice.toUpperCase();
    
    let alert = ""

    // When the user wins, result = 1, when the computer wins result = 2, else result = 0
    let result = 0

    switch (true) {

        case (playerChoiceUpper === "ROCK" && computerChoiceUpper === "PAPER") :
            alert = "You Lose the round! Paper beats Rock";
            result = 2;
            break;
        
        case (playerChoiceUpper === "ROCK" && computerChoiceUpper === "SCISORS") :
            alert = "You Win the round! Rock beats Scisors";
            result = 1;
            break;
        
        case (playerChoiceUpper === "PAPER" && computerChoiceUpper === "ROCK") :
            alert = "You Win the round! Paper beats Rock";
            result = 1;
            break;

        case (playerChoiceUpper === "PAPER" && computerChoiceUpper === "SCISSORS") :
            alert = "You Lose the round! Scisors beats Paper";
            result = 2;
            break;

        case (playerChoiceUpper === "SCISSORS" && computerChoiceUpper === "ROCK") :
            alert = "You Lose the round! Rock beats Scisors";
            result = 2;
            break;

        case (playerChoiceUpper === "SCISSORS" && computerChoiceUpper === "PAPER") :
            alert = "You Win the round! Scisors beats Paper";
            result = 1;
            break;
        
        default:
            alert = "Thats a Tie!"
            result = 0;
            break;
    }

    console.log(alert)

    return result
}

// Get all elements needed
const result_text = document.querySelector('.round__result-text');
const result_next = document.querySelector('.round__result-next');
const npc_score = document.querySelector('.points_npc');
const pc_score = document.querySelector('.points_pc');
const rps_npc = document.querySelectorAll('.option_npc');
const rps_pc = document.querySelectorAll('.option_pc');

rps_npc.forEach(npc_op => 
    npc_op.addEventListener('click', () => console.log(npc_op.dataset.key))
    );

rps_pc.forEach(pc_op => 
    pc_op.addEventListener('click', () => {
        //console.log(pc_op.dataset.key);
        //pc_op.classList.add('selected');

        // Get choices and play round
        pc_op.classList.remove('option_pc_hover');
        const ran_npc_choice = getComputerChoice();
        const npc_choice = rps_npc[ran_npc_choice].dataset.key;
        const pc_choice = pc_op.dataset.key;
        result = playRound(pc_choice, npc_choice);

        // Change chocie background based on the result
        if (result == 1) {
            pc_op.classList.add('win');
            rps_npc[ran_npc_choice].classList.add('lose');
            result_text.innerHTML = 'You Won!'
        }
        else if (result == 2) {
            pc_op.classList.add('lose');
            rps_npc[ran_npc_choice].classList.add('win');
            result_text.innerHTML = 'You Lose'
        }
        else {
            pc_op.classList.add('tie');
            rps_npc[ran_npc_choice].classList.add('tie');
            result_text.innerHTML = 'That\'s a Tie'
        }
    }
    ));