const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const buttons = document.querySelector('#buttons')
let playerScoreValue = 0;

function getPlayerChoice(element) {
    if (element.target.classList.contains('rock')) {
        return 'rock' 
    } else if (element.target.classList.contains('paper')) {
        return 'paper'
    } else if (element.target.classList.contains('scissors')) {
        return 'scissors'
    }
}

buttons.addEventListener('click', getPlayerChoice);