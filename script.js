const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
let resultContainer = document.querySelector(".result")
let scoreContainer = document.querySelector('.score')

function getComputerChoice (){
    let choices = ["rock" , 'paper' , 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection , computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper"){
        result = "You lose! paper beats rock"
        computerScore += 1;
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        result = "You win !!"
        playerScore += 1;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        result = "You win !!"
        playerScore += 1;
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        result = "You lose! scissors beat paper"
        computerScore += 1;
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        result = "You lose! rock beats scissors"
        computerScore += 1;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        result = "You win !!"
        playerScore += 1;
    }else {
        result = "It's a tie"
        playerScore  = playerScore;
        computerScore = computerScore;
    }
    return result
}

function whoWon (){
    if(playerScore == 5){
        resultContainer.textContent = "Game Over"
        scoreContainer.textContent = "Congratulations You WON !!!"
        playerScore = 0;
        computerScore =0;
    }else if (computerScore == 5){
        resultContainer.textContent = "Game Over"
        scoreContainer.textContent = "You Lost, Try Again"
        playerScore = 0;
        computerScore =0;
    }
}

rockButton.addEventListener('click' , () => {
    resultContainer.textContent = playRound("rock" ,getComputerChoice());
    scoreContainer.textContent = `You: ${playerScore} - Computer: ${computerScore}`;
    whoWon();
})

paperButton.addEventListener('click' , () => {
    resultContainer.textContent = playRound("paper" ,getComputerChoice());
    scoreContainer.textContent = `You: ${playerScore} - Computer: ${computerScore}`;
    whoWon ();
})

scissorsButton.addEventListener('click' , () => {
    resultContainer.textContent = playRound("scissors" ,getComputerChoice());
    scoreContainer.textContent = `You: ${playerScore} - Computer: ${computerScore}`;
    whoWon ();
})