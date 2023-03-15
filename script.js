const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultContainer = document.querySelector(".result")
const scoreContainer = document.querySelector('.score')

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
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        result = "You win !!"
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        result = "You win !!"
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        result = "You lose! scissors beat paper"
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        result = "You lose! rock beats scissors"
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        result = "You win !!"
    }else {
        result = "It's a tie"
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
// function game (){
//     let playerScore = 0;
//     let computerScore = 0;
//     let gameResult = ``
//     for (let i = 0 ; i < 5 ; i++){
//         let playerSelection = prompt("Enter rock ,paper or scissors");
//         let computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection , computerSelection))
//         if (result == "You lose! rock beats scissors"){
//             computerScore += 1;
//         }else if (result == "You lose! scissors beat paper"){
//             computerScore += 1;
//         }else if (result == "You lose! paper beats rock"){
//             computerScore += 1;
//         }else if (result == "You win !!"){
//             playerScore += 1;
//         }else {
//             playerScore = playerScore;
//             computerScore = computerScore;
//         }
//         console.log(`Result: You(${playerScore}) - Computer(${computerScore})`)
//     }
//     if (playerScore > computerScore){
//         gameResult = 'Congratulations, you won !!'
//     }else if (computerScore > playerScore){
//         gameResult = 'You lost, try another time'
//     }else {
//         gameResult = `It's a tie`
//     }
//     console.log(gameResult)
// }

// game ();