const MAX_SCORE = 5;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}

function decideWinner(playerChoice, computerChoice, playerScore, computerScore) {
    if (playerChoice == computerChoice) return [playerScore, computerScore];

    if ((playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")) {
        playerScore++;
    }
    else {
        computerScore++;
    }
    return [playerScore, computerScore];
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    const playerScoreDisplay = document.querySelector('#player');
    const computerScoreDisplay = document.querySelector('#computer');
    const playGround = document.querySelector('.playGround');

    function playRound(e) {
        if (playerScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
            playGround.removeEventListener('click', playRound);
            return;
        }

        const playerChoice = e.target.classList[1];
        const computerChoice = getComputerChoice();

        console.log(playerChoice, computerChoice);

        [playerScore, computerScore] = decideWinner(playerChoice, computerChoice, playerScore, computerScore);

        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }
    
    playGround.addEventListener('click', playRound);

}
playGame();