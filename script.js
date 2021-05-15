const playerChoiceArea = document.querySelector('#player-choice');
const pcChoiceArea = document.querySelector('#pc-choice');
const buttons = document.querySelector('#buttons')
const body = document.querySelector('body');
let playerScore = 0;
let pcScore = 0;

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

function drawPlayerScore() {
    const playerScoreText = document.querySelector('#player-score');
    if (playerScoreText.textContent !== '') {
        playerScoreText.textContent = '';
    }
    playerScoreText.appendChild(document.createTextNode(`Player: ${playerScore}`));
}

function drawPCScore() {
    const pcScoreText = document.querySelector('#pc-score');
    if (pcScoreText.textContent !== '') {
        pcScoreText.textContent = '';
    }
    pcScoreText.appendChild(document.createTextNode(`Computer: ${pcScore}`));
}

function createResetButton() {
    const resetButton = document.createElement('button');
    resetButton.appendChild(document.createTextNode('Reset'));
    resetButton.classList.add('reset');
    return resetButton;
}

function resetBoard(element) {
    if (element.target.classList.contains('reset')) {
        playerChoiceArea.classList.remove('rock', 'paper', 'scissors');
        pcChoiceArea.classList.remove('rock', 'paper', 'scissors');
        body.removeChild(document.querySelector('h2'));
    }
}

function createOutcomeText(element) {
    if (playerChoiceArea.classList.contains('rock') || playerChoiceArea.classList.contains('paper') || playerChoiceArea.classList.contains('scissors')) {
        return;
    }
    const outcomeText = document.createElement('h2')
    const outcome = displayChoices(element);
    if (outcome === "Congratulations, you win!") {
        playerScore++;
    } else if (outcome === "Sorry, you lost.") {
        pcScore++;
    }
    outcomeText.appendChild(document.createTextNode(outcome));
    outcomeText.appendChild(createResetButton());
    body.appendChild(outcomeText);
}

function drawScores() {
    drawPlayerScore();
    drawPCScore();
}

function handleClickEvent(element) {
    createOutcomeText(element);
    drawScores();
}

drawScores();
buttons.addEventListener('click', handleClickEvent);
body.addEventListener('click', resetBoard);