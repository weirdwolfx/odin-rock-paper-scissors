function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}

const playGround = document.querySelector('.playGround');

playGround.addEventListener('click', e => {
    console.log(e.target.classList[1]);
})
