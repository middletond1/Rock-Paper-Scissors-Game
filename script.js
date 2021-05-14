const playerScore = document.querySelector('#player-score');
const pcScore = document.querySelector('#pc-score');
const playerChoiceArea = document.querySelector('#player-choice');
const pcChoiceArea = document.querySelector('#pc-choice');
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

function getPcChoice() {
    let decision = ['rock', 'paper', 'scissors'][Math.floor((Math.random()*3))];
    return decision;
}

// function getWinner(element) {
//     if (getPlayerChoice(element) === 'rock' && getPcChoice() === 'scissors' || getPlayerChoice(element) === 'paper' && getPcChoice() === 'rock' || getPlayerChoice(element) === 'scissors' && getPcChoice() === 'paper') {
//         console.log("Congratulations, you win!");
//     } else if (getPlayerChoice(element) === 'rock' && getPcChoice() === 'paper' || getPlayerChoice(element) === 'paper' && getPcChoice() === 'scissors' || getPlayerChoice(element) === 'scissors' && getPcChoice() === 'rock') {
//         console.log("Sorry, you lost.");
//     } else if (getPlayerChoice(element) === 'rock' && getPcChoice() === 'rock' || getPlayerChoice(element) === 'paper' && getPcChoice() === 'paper' || getPlayerChoice(element) === 'scissors' && getPcChoice() === 'scissors') {
//         console.log("Draw.");
//     }
// } 

function displayChoices(element) {
    const playerChoice = getPlayerChoice(element);
    const pcChoice = getPcChoice();
    playerChoiceArea.classList.add(`${playerChoice}`);
    pcChoiceArea.classList.add(`${pcChoice}`);
    if (playerChoice === 'rock' && pcChoice === 'scissors' || playerChoice === 'paper' && pcChoice === 'rock' || playerChoice === 'scissors' && pcChoice === 'paper') {
        return "Congratulations, you win!";
    } else if (playerChoice === 'rock' && pcChoice === 'paper' || playerChoice === 'paper' && pcChoice === 'scissors' || playerChoice === 'scissors' && pcChoice === 'rock') {
        return "Sorry, you lost.";
    } else if (playerChoice === 'rock' && pcChoice === 'rock' || playerChoice === 'paper' && pcChoice === 'paper' || playerChoice === 'scissors' && pcChoice === 'scissors') {
        return "Draw.";
    }
}

function createResetButton() {
    const resetButton = document.createElement('button');
    resetButton.appendChild(document.createTextNode('Ok'));
    resetButton.classList.add('reset');
}

function 

function handleClickEvent(element) {
    displayChoices(element);
}

buttons.addEventListener('click', handleClickEvent);