//return the computers choice
function getComputerChoice()
{
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}

//calculate the players score based on the computer and the players choice
function scoreEval(player, computer)
{
    let score = 0;
    if(player === computer)
    {
        return score;
    }
    if((player === "scissors" && computer ==='paper') ||
            (player === "paper" && computer === 'rock')||
            (player === "rock" && computer === 'scissors'))
    {
        score = 1;
        return score;
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
    //displays the outcome of the current round
    const result = document.getElementById('result');
    const resultObj = { '0' : 'Its a draw🫣', '1': 'You won🏆', '-1':'You lost☹️'};
    result.innerText = resultObj[playerScore.toString()];
   
    //displays the player's choice in the current round
    const hands = document.getElementById("hands");
    hands.innerText = `👱🏻‍♀️player: ${player} 🖥️computer: ${computer}`;
    
    //displays the overall score
    const scoreDisplay = document.getElementById("player-score");
    let scoreContent = scoreDisplay.innerText.split(':');
    let currentScore = Number(scoreContent[1]);
    let finalScore = 0;
    if (isNaN(currentScore)) {
        //if its the first round of the game (currentScore == NaN)
        finalScore = playerScore;
    } 
    else {
        finalScore = playerScore + currentScore;
    }
    scoreDisplay.innerText = `Final score:${finalScore}`;
   
}

//Determine the score of the game
function onClickRPSButton(rpsbutton)
{
    let computerChoice = getComputerChoice();
    let playerScore = scoreEval(rpsbutton.value, computerChoice);
    showScore(rpsbutton.value, computerChoice, playerScore);

}

//if endGameButton is clicked clear all the logs from the previous game 
function endGame() {
    const playerScore = document.getElementById('player-score');
    const hands = document.getElementById('hands');
    const result = document.getElementById('result');
    playerScore.innerText = '';
    hands.innerText = '';
    result.innerText = '';
}

//the main function: check for the user's activity
function playGame()
{
    let playButton = document.querySelectorAll(".playButton");
    playButton.forEach(rpsbutton => {
            rpsbutton.onclick = ()=> onClickRPSButton(rpsbutton)
        });

    let stop = document.getElementById("endGameButton");
    stop.onclick = ()=>endGame();

}


//starting point of the code
playGame();