function getComputerChoice() {
    let choice = (Math.random() * 3);
    if (choice >= 0 && choice < 1) {
        return "Rock";
    }
    else if (choice >= 1 && choice < 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

let computerSelection = getComputerChoice();
let playerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
            return "You win!";
        }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return "You lose!";
    }
    else {
        return "It's a tie!";
    }
}


function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    
    playRound(playerSelection, computerSelection);

    if (playRound(playerSelection, computerSelection) == "You win!") {
        playerScore += 1;
    }
    else if (playRound(playerSelection, computerSelection)== "You lose!") {
        computerScore += 1;
    }

    computerSelection = getComputerChoice();
    playerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    if (playRound(playerSelection, computerSelection) == "You win!") {
        playerScore += 1;
    }
    else if (playRound(playerSelection, computerSelection)== "You lose!") {
        computerScore += 1;
    }

    computerSelection = getComputerChoice();
    playerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    if (playRound(playerSelection, computerSelection) == "You win!") {
        playerScore += 1;
    }
    else if (playRound(playerSelection, computerSelection)== "You lose!") {
        computerScore += 1;
    }

    computerSelection = getComputerChoice();
    playerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    if (playRound(playerSelection, computerSelection) == "You win!") {
        playerScore += 1;
    }
    else if (playRound(playerSelection, computerSelection)== "You lose!") {
        computerScore += 1;
    }

    computerSelection = getComputerChoice();
    playerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    if (playRound(playerSelection, computerSelection) == "You win!") {
        playerScore += 1;
    }
    else if (playRound(playerSelection, computerSelection)== "You lose!") {
        computerScore += 1;
    }

    computerSelection = getComputerChoice();
    playerSelection = getComputerChoice();

    if (playerScore > computerScore) {
        return "You win! Score: " + playerScore + " to " + computerScore;
    }

    else if (computerScore > playerScore) {
        return "You lose! Score: " + playerScore + " to " + computerScore;
    }

    else {
        return "You tied! Score: " + playerScore + " to " + computerScore;
    }
}