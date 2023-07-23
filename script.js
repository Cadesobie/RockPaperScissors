let playerScore = 0;
let computerScore = 0;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getComputerChoice() {
    const computerHand = ["rock","paper","scissors"]
    return computerHand[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (!["rock","paper","scissors"].includes(playerSelection)) {
        return "Please enter rock, paper, or scissors."
    }
    if (playerSelection == computerSelection) {
        return `It's a tie! You both picked ${playerSelection}.`
    } else if (
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")
    ){
        playerScore = playerScore + 1;
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}!`
    } else {
        computerScore = computerScore + 1;
        return `You lose! ${capitalize(computerSelection)} beats ${playerSelection}!`
    }
}

function game() {
    for (let i = 1; i<=5; i++) {
        let playerSelection = prompt("Please enter rock, paper, or scissors.",);
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`The score is ${playerScore} (You) - ${computerScore} (Computer)`)
    } 

    if (playerScore == computerScore) {
        console.log('Tie game!');
    } else if (playerScore < computerScore) {
        console.log("You lost! The Computer wins!");
    } else {
        console.log ("You won! You beat the Computer!");
    }    
}

game()