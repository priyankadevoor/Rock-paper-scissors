function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors']
    let index = Math.floor(Math.random() * choice.length) 
    return choice[index]
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock'){
        if (computerSelection == 'scissors'){
            return 'Player wins!'
        }
        else if (computerSelection == 'rock'){
            return 'Its a tie!'
        }
        else{
            return 'Computer wins!'
        } }
    else if (playerSelection == 'paper'){
        if (computerSelection == 'scissors'){
            return 'Computer wins!'
        }
        else if (computerSelection == 'rock'){
            return 'Player wins!'
        }
        else{
            return 'Its a tie!'
        }
    }
    else{
        if (computerSelection == 'scissors'){
            return 'Its a tie!'
        }
        else if (computerSelection == 'rock'){
            return 'Computer wins!'
        }
        else{
            return 'Player wins!'
        }

    }
    }

function playGame(){
    let playerWins = 0
    let computerWins = 0
    for(i=0;i<5;i++){
        let playerSelection = prompt('Enter your selection - ')
        let computerSelection = getComputerChoice()
        let currentWinner = playRound(playerSelection,computerSelection)
        console.log(currentWinner)
        if (currentWinner == 'Player wins!'){
            playerWins ++
        }
        else if (currentWinner == 'Computer wins!'){
            computerWins ++
        }
    }
    if (playerWins > computerWins){
        console.log('PLAYER WINS!!!')
    }
    else if (computerWins > playerWins){
        console.log('COMPUTER WINS!!!!!')
    }
    else{
        console.log("IT'S A TIE!!!")
    }
    
}

playGame()