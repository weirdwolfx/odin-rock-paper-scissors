function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    const userInput = prompt("Your choice: ");
    return String(userInput).toLowerCase();
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice == computerChoice) {
        console.log("Tie\n");
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")) 
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    return `${humanScore + " " + computerScore}`;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const updatedScore = playRound(humanChoice, computerChoice, humanScore, computerScore);
        const scoreArray = updatedScore.split(" ");
        humanScore = parseInt(scoreArray[0]);
        computerScore = parseInt(scoreArray[1]);
    }

    console.log(`Your score: ${humanScore}\n`);
    console.log(`Computer Score: ${computerScore}\n`);
}


playGame();