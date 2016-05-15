////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove){
        winner = "It's a tie!"
    }else if (playerMove == "rock"){
	    if (computerMove == "scissors"){
		    winner = "Player Wins";
	    }else{
		    winner = "Computer Wins";
	    }
    }else if (playerMove == "scissors"){
	    if (computerMove == "rock"){
		    winner = "Computer Wins";
	    }else{
		    winner = "Player Wins";
	    }
    }else if (playerMove == "paper"){
	    if (computerMove == "scissors"){
		    winner = "Computer Wins";
	    }else{
		    winner = "Player Wins";
	    }
    }else{
	    winner = "Please only choose rock, scissors or paper."
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var countRound = 1;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins<5 && computerWins<5){
	    console.log("ROUND: "+countRound);
	    var playerMove = getPlayerMove();
	    var computerMove = getComputerMove();
	    var winnerThisRound = getWinner(playerMove, computerMove);
	    if(winnerThisRound==="Player Wins"){
		    playerWins+=1;
	    }else if(winnerThisRound==="Computer Wins"){
		    computerWins+=1;
	    }else if(winnerThisRound==="It's a tie!"){
		    console.log("Tie");
	    }else{
		    console.log("Please only choose rock, scissors or paper.");
	    }
	    console.log("Player chose "+playerMove+" while computer chose "+computerMove+". "+"Round "+countRound+" Winner: "+winnerThisRound);
	    console.log("Current Score: ");
	    console.log("    Player: "+playerWins);
	    console.log("    Computer: "+computerWins);
	    countRound++;
    }
    return ["GAME OVER. Player Score: "+playerWins, "Computer Score: "+computerWins];
}

