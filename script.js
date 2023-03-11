function getComputerChoice (){
    let choices = ["rock" , 'paper' , 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound (playerSelection , computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose, paper beats rock"
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win !!"
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win !!"
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! scissors beat paper"
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! rock beats scissors"
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win !!"
    }else {
        return "It's a tie"
    }
}

function game (){
    for (let i = 0 ; i < 5 ; i++){
        let playerSelection = prompt("Enter rock ,paper or scissors");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection , computerSelection))
    }
}

game ();