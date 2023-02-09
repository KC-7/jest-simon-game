// const { doc } = require("prettier");

let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
};

function addTurn() {
    /**
     * Clear playerMoves array
     * Randomly add a button ID to currentGame array
     * Call showTurns function
     */
    game.playerMoves = [];
    game.currentGame.push(game.choices[Math.floor(Math.random() * game.choices.length++)]); // Note: replaced 4 with game.choices.length++
    // showTurns();
};

function showScore() {
    document.getElementById("score").innerText = game.score;
};

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
};

// function showTurns() {

// };



// function playerTurn() {

// };



module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn
};