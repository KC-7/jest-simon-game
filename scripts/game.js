// const { doc } = require("prettier");

let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute("id");
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            });
            circle.setAttribute("data-listener", "true");
        };
    };
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
    showTurns();
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

function showTurns() {
    /**
     * Step through currentGame array
     * Turn on the light
     * Turn off the light
     */
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
};

// function playerTurn() {

// };

module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn,
    showTurns
};