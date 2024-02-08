let rockElement = document.getElementById("rock-btn");
let paperElement = document.getElementById("paper-btn");
let scissorElement = document.getElementById("scissor-btn");

let whatHappenedSection = document.getElementById("what-happened");

let playerScoreElement = document.getElementById("player-score");
let computerScoreElement = document.getElementById("computer-score");

let roundElement = document.getElementById("round")

rockElement.addEventListener("click", rockSelected);
paperElement.addEventListener("click", paperSelected);
scissorElement.addEventListener("click", scissorSelected);

let round = 0
let playerScore = 0
let computerScore = 0
const CHOICES = ["ROCK", "PAPER", "SCISSOR"]

function rockSelected() {
    playRound(CHOICES[0], computersPick())
}

function paperSelected() {
    playRound(CHOICES[1], computersPick())

}
function scissorSelected() {
    playRound(CHOICES[2], computersPick())

}

function computersPick() {
    return CHOICES[getRandomInt(0, 2)]
}
function whoWins(select1, select2) {

    if (select1 == select2) {

        return "DRAW"
    }
    else if (select1 == "ROCK") {
        if (select2 == "PAPER") {
            return "Player2"
        }
        else {
            return "Player1"
        }
    }
    else if (select1 == "PAPER") {
        if (select2 == "SCISSOR") {
            return "Player2"
        }
        else {
            return "Player1"
        }
    }
    else {
        if (select2 == "PAPER") {
            return "Player1"
        }
        else {
            return "Player2"
        }
    }
}
function playRound(playerValue, computersPickValue) {
    // alert(playerValue + " " + computersPickValue)
    if (round == 0) {
        computerScoreElement.innerHTML = computerScore;
        playerScoreElement.innerHTML = playerScore;
    }
    let winner = whoWins(playerValue, computersPickValue)
    whatHappenedSection.innerHTML =
        "You have picked " + playerValue + " and the computer has selected " + computersPickValue + "<br>";
    if (winner == "Player1") {
        playerScore++;
        playerScoreElement.innerHTML = playerScore;
        whatHappenedSection.innerHTML += "You have won the round!, pick again :)"
    } else if (winner == "Player2") {
        computerScore++;
        computerScoreElement.innerHTML = computerScore;
        whatHappenedSection.innerHTML += "Unlucky! the computer won this round, pick again!"

    }
    else {
        //we ain't counting the draw matches
        round--;

        whatHappenedSection.innerHTML += "Draw! pick again!"

    }


    round++;
    if (round >= 5) {
        round = 0;
        whatHappenedSection.innerHTML = ((playerScore > computerScore) ? "You have" : "The Computer has") + " won, pick again if you want to play again!"
        playerScore = 0
        computerScore = 0


        // alert("The Game Has Ended!")
        roundElement.innerHTML = ""
        return;
    }
    else {
        roundElement.innerHTML = "Round " + (round + 1)
    }

}




//Helper Math function
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}