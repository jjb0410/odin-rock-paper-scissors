//ui functionality starts here
let computerSelection = getComputerChoice(); //initialize choice for computer 
let playerSelection; //= prompt('Rock, paper, or scissors?', 'Rock'); // take player choice

let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
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

//game logic starts here
function getComputerChoice() {
    let choice = (Math.random() * 3); //computer choice is 1/3 chance of rock paper or scissors
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

function randomizeChoice() {
    computerSelection = getComputerChoice(); //rolls a new random choice for computer
}

function playRound(playerSelection, computerSelection) {
    randomizeChoice(); //gets a new random choice for the computer for each new round
    computerSelection = computerSelection.toLowerCase(); //convert to lowercase to avoid case sensitivity issues
    playerSelection = playerSelection.toLowerCase();

    //check for winning choices
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return "Player wins!";
        }
    //check for losing choices
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return "Player wins!";
    }
    //remaining choices should be a tie
    else {
        return "It's a tie!";
    }
}

//plays 5 games in total
function playGame() {
    let playerScore = 0; //initialize scores at 0
    let computerScore = 0;
    
    for (let i=0; i<5; i++) {
        //playRound(playerSelection, computerSelection);
        // if player wins add 1 to score and print result in results div
        if (playRound(playerSelection, computerSelection) == "You win!") {
            playerScore += 1;
            let resultsPara = document.createElement("p");
            resultsPara.textContent = "Player wins!";
            resultsDiv.appendChild(resultsPara);
        }
        // if computer wins add 1 to score and print result in results div
        else if (playRound(playerSelection, computerSelection) == "You lose!") {
            computerScore += 1;
            let resultsPara = document.createElement("p");
            resultsPara.textContent = "Computer wins!";
            resultsDiv.appendChild(resultsPara);
        }
        //if tie print in results div
        else {
            let resultsPara = document.createElement("p");
            resultsPara.textContent = "It's a tie!";
            resultsDiv.appendChild(resultsPara);
        }
    }

    //check if player score is higher than computer score, if so, declare player winner
    if (playerScore > computerScore) {
        return "Player wins! Score: " + playerScore + " to " + computerScore;
    }
    //check if computer score is higher than player score, if so, declare player loser
    else if (computerScore > playerScore) {
        return "Player wins! Score: " + playerScore + " to " + computerScore;
    }
    //only other option is a tie
    else {
        return "It's a tie! Score: " + playerScore + " to " + computerScore;
    }
}