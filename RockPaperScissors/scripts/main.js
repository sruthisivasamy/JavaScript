//return the computers choice
function getComputerChoice()
{
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}

//calculate the players score based on the computer and the players choice
function scoreEval(player, computer)
{
    let score = 0;
    if(player === computer)
    {
        score = 0;
    }
    else if((player === "scissors" && computer==='paper') ||
            (player === "paper" && computer === 'rock')||
            (player === "rock" && computer === 'scissors'))
    {
        score = 1;
    }
    else 
    {
        score = -1;
    }
    return score;
} 

//display the result of the game including the chioce of both the computer and the player
function showScore(player, computer, playerScore)
{
    let result = document.getElementById('result');
    switch(playerScore)
    {
        case 0:
            result.innerText = 'Its a draw🫣';
            break;
        case 1:
            result.innerText = 'You won🏆';
            break;
        case -1:
            result.innerText = 'You lost☹️';
            break;
    }

    let hands = document.getElementById("hands");
    
    let scoreDisplay = document.getElementById("player-score");
    let currentScore = Number(scoreDisplay.innerText);
    let finalScore = 0;
    if (isNaN(currentScore)) {
        //if its the first round of the game (currentScore == NaN)
        finalScore = playerScore;
    } 
    else {
        finalScore = playerScore+currentScore;
        console.log("else");
    }
    scoreDisplay.innerText = `Final score: ${finalScore}`;
    hands.innerText = `👱🏻‍♀️player: ${player} 🖥️computer: ${computer}`;
}

//Determine the score of the game
function onClickRPSButton(rpsbutton)
{
    let computerChoice = getComputerChoice();
    let playerScore = scoreEval(rpsbutton.value, computerChoice);
    showScore(rpsbutton.value, computerChoice, playerScore);

}

//add onclick  eventListener to the rock paper scissors and endGame buttons
function playGame()
{
    let playButton = document.querySelectorAll(".playButton");
    playButton.forEach(rpsbutton => {
            rpsbutton.onclick = ()=> onClickRPSButton(rpsbutton)
        });

    let stop = document.getElementById("endGameButton");
    stop.onclick = ()=>endGame();

}

//if endGameButton is clicked clear all the logs from the previous game 
function endGame() {
    let playerScore = document.getElementById('player-score');
    let hands = document.getElementById('hands');
    let result = document.getElementById('result');
    playerScore.innerText = '';
    hands.innerText = '';
    result.innerText = '';
  }

playGame();