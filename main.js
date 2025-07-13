const MAX_SCORE = 5;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return "Rock";
    else if (choice == 1) return "Paper";
    else return "Scissors";
}

function decideWinner(playerChoice, computerChoice, playerScore, computerScore) {
    let winner = null;

    if (playerChoice == computerChoice) return [playerScore, computerScore, winner];

    if ((playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Paper" && computerChoice == "Rock") ||
        (playerChoice == "Scissors" && computerChoice == "Paper")) {
        winner = "player";
        playerScore++;
    }
    else {
        winner = "computer";
        computerScore++;
    }
    return [playerScore, computerScore, winner];
}

function roundLog(playerChoice, computerChoice, winner) {
    const playerChoiceDisplay = document.createElement('p');
    const computerChoiceDisplay = document.createElement('p');

    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;

    if (winner == 'player') {
        playerChoiceDisplay.classList.add('winner');
    }
    else if (winner == 'computer') {
        computerChoiceDisplay.classList.add('winner');
    }

    document.querySelector('.log.player').appendChild(playerChoiceDisplay);
    document.querySelector('.log.computer').appendChild(computerChoiceDisplay);
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    const playerScoreDisplay = document.querySelector('#player');
    const computerScoreDisplay = document.querySelector('#computer');
    const playGround = document.querySelector('.playGround');

    function playRound(e) {
        let winner = null;

        if (playerScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
            playGround.removeEventListener('click', playRound);
            return;
        }

        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();

        [playerScore, computerScore, winner] = decideWinner(playerChoice, computerChoice, playerScore, computerScore);

        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;

        roundLog(playerChoice, computerChoice, winner);
    }

    playGround.addEventListener('click', playRound);

}
playGame();