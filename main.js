const MAX_SCORE = 5;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}

function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) return;

    if ((playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")) {
        playerScore++;
    }
    else {
        computerScore++;
    }
    
    updateScore();
}

let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector('#player');
const computerScoreDisplay = document.querySelector('#computer');
const playGround = document.querySelector('.playGround');

updateScore();

playGround.addEventListener('click', e => {
    const playerChoice = e.target.classList[1];
    const computerChoice = getComputerChoice();

    console.log(computerChoice, playerChoice);

    playRound(playerChoice, computerChoice);
});

