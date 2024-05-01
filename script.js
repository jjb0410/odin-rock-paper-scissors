//ui functionality starts here
let computerSelection = getComputerChoice(); //initialize choice for computer 
let playerSelection; //= prompt('Rock, paper, or scissors?', 'Rock'); // take player choice
let roundWinner; //store result of winner for each round

let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let clearBtn = document.querySelector(".clear");
let resultsDiv = document.querySelector(".results");

rockBtn.addEventListener("click", function() {
    playerSelection="Rock";
    playGame();}
    );
paperBtn.addEventListener("click", function() {
    playerSelection="Paper";
    playGame();}
    );
scissorsBtn.addEventListener("click", function() {
    playerSelection="Scissors";
    playGame();}
    );

clearBtn.addEventListener("click", function() {
    while (resultsDiv.firstChild = true) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }
})

//game logic starts here
function getComputerChoice() {
    let choice = (Math.random() * 3); //computer choice is 1/3 chance of rock paper or scissors
    if (choice >= 0 && choice < 1) {
        return "rock";
    }
    else if (choice >= 1 && choice < 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function randomizeChoice() {
    computerSelection = getComputerChoice(); //rolls a new random choice for computer
}

function playRound() {
    randomizeChoice(); //gets a new random choice for the computer for each new round

    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        roundWinner="player";
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        roundWinner="player";
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        roundWinner="player";
    }
    //check for losing choices
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        roundWinner="computer";
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        roundWinner="computer";
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        roundWinner="computer";
    }
    //remaining choices should be a tie
    else {
        roundWinner="tie";
    }
}

//plays 5 games in total until 5 wins
function playGame() {
    let playerScore = 0; //initialize scores at 0
    let computerScore = 0;
    let playerWins = 0;
    let computerWins = 0;
    
    while (playerWins<5 && computerWins<5) {
        playRound();
        // if player wins add 1 to score and print result in results div
        if (roundWinner=="player") {
            playerScore += 1;
            playerWins += 1;
            let resultsPara = document.createElement("p");
            resultsPara.textContent = playerSelection + " vs. " + computerSelection.toLowerCase() + ", player wins! Current score: " + playerScore + " to " + computerScore;
            resultsDiv.appendChild(resultsPara);
            continue;
        }
        // if computer wins add 1 to score and print result in results div
        else if (roundWinner=="computer") {
            computerScore += 1;
            computerWins += 1;
            let resultsPara = document.createElement("p");
            resultsPara.textContent = playerSelection + " vs. " + computerSelection.toLowerCase() + ", computer wins! Current score: " + playerScore + " to " + computerScore;
            resultsDiv.appendChild(resultsPara);
            continue;
        }
        //if tie print in results div
        else  {
            let resultsPara = document.createElement("p");
            resultsPara.textContent = playerSelection + " vs. " + computerSelection.toLowerCase() + ", it's a tie! Current score: " + playerScore + " to " + computerScore;
            resultsDiv.appendChild(resultsPara);
        }
    }

    //check if player score is higher than computer score, if so, declare player winner
    if (playerScore > computerScore) {
        let finalResultsPara = document.createElement("p");
        finalResultsPara.textContent = "Player wins the game! Final score: " + playerScore + " to " + computerScore;
        resultsDiv.appendChild(finalResultsPara);
    }
    //check if computer score is higher than player score, if so, declare player loser
    else if (computerScore > playerScore) {
        let finalResultsPara = document.createElement("p");
        finalResultsPara.textContent = "Computer wins the game! Final score: " + playerScore + " to " + computerScore;
        resultsDiv.appendChild(finalResultsPara);
    }
    //only other option is a tie but should never happen because game ends at 5 wins
    else {
        let finalResultsPara = document.createElement("p");
        finalResultsPara.textContent = "It's a tie! Final score: " + playerScore + " to " + computerScore;
        resultsDiv.appendChild(finalResultsPara);
    }
}