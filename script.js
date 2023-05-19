// Game functions
function getComputerChoice() {
    let choices = [0, 1, 2];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
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
        console.log(pc_op.dataset.key);
        pc_op.classList.add('selected');
        npc_choice = getComputerChoice();
        rps_npc[npc_choice].classList.add('selected');
    }
    ));