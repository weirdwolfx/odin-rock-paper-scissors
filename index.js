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
        return `${humanScore + " " + computerScore}`; // exit code early
    }

    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock.\n");
            computerScore++;
        }
        else {
            console.log("You win! Rock beats scissors.\n")
            humanScore++;
        }
    } 
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats rock.\n");
            humanScore++;
        }
        else {
            console.log("You lose! Scissors beat paper.\n");
            computerScore++;
        }
    }
    else {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors.\n");
            computerScore++;
        }
        else {
            console.log("You win! Scissors beat paper.\n");
            humanScore++;
        }
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