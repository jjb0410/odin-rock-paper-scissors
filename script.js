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