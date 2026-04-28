//------------------------------------------------
//------------------- NOTES ----------------------
//------------------------------------------------
/*
    
*/
//------------------------------------------------
//---------------- DOM OBJECTS -------------------
//------------------------------------------------

const startButton       = document.querySelector("#StartButton")
const PlayerDialog      = document.querySelector("#PlayerNameDialog")
const PlayerNameForm    = document.querySelector("#PlayerNameForm")
const FormPlayerOne     = document.querySelector("#FormPlayerOne")
const FormPlayerTwo     = document.querySelector("#FormPlayerTwo")

//------------------------------------------------
//------------------ OBJECTS ---------------------
//------------------------------------------------

//------------------- IIFEs ----------------------
const GameBoard = (() => {

    //Variables for GameBoard
    let gameBoard = [];
    gameBoardLength = 3;

    function createBoard(){
        for(let i = 0; i < gameBoardLength; ++i){
            gameBoard[i] = []
            for(let j = 0; j < gameBoardLength; ++j){
                gameBoard[i][j] = null
            }
        }
    }

    function printBoard(){
        let output = "GameBoard: \n"
        for(let i = 0; i < gameBoardLength; ++i){
            for(let j = 0; j < gameBoardLength; ++j){
                output += gameBoard[i][j] + " "
            }
            output += "\n"
        }
    }
    
    function setTile(i, j, value){
        if(gameBoard[i][j] === null){
            gameBoard[i][j] = value
        }
        else{
            console.log("Set tile did nothing")
        }
    }

    function getSize(){
        return gameBoardLength;
    }

    //Return the functions so they can be used
    return{
        createBoard,
        printBoard,
        setTile,
        getSize
    }

})();

const Game = (() => {

    let playerOne
    let playerTwo

    //Should be receiving player objects already
    function setPlayers(PlayerOne, PlayerTwo){
        playerOne = PlayerOne
        playerTwo = PlayerTwo

        console.log("Hello, " + playerOne.getPlayerName())
        console.log("Hello, " + playerTwo.getPlayerName())

    }

    function displayGame(){
        
        //remove the start button from the header
        startButton.remove()
        
        const gameContainer = document.querySelector("#gameContainer")

        //Bigger objects
        const playerOneCard = document.createElement("div")
        playerOneCard.classList.add("playerCard")
        playerOneCard.classList.add("playerOneCard")
        gameContainer.appendChild(playerOneCard)
        
        const gameBoard = document.createElement("div")
        gameBoard.classList.add("gameBoard")
        gameContainer.appendChild(gameBoard)

        const playerTwoCard = document.createElement("div")
        playerTwoCard.classList.add("playerCard")
        playerTwoCard.classList.add("playerTwoCard")
        gameContainer.appendChild(playerTwoCard)

        //Cells for gameBoard
        for(let i = 0; i < GameBoard.getSize(); ++i){
            const gridRow = document.createElement("div")
            gridRow.classList.add("gameBoardRow")

            for(let j = 0; j < GameBoard.getSize(); ++j){
                const gameBoardCell = document.createElement("div")
                gameBoardCell.classList.add("Cell")
                gridRow.appendChild(gameBoardCell)
            }

            gameBoard.appendChild(gridRow)
        }
    }

    return{
        setPlayers,
        displayGame
    }

})();


//------------------------------------------------
//--------------- DOM FUNCTIONS ------------------
//------------------------------------------------

startButton.addEventListener("click", () => {
    console.log("Hello from the start button")
    PlayerDialog.showModal()
})

PlayerNameForm.addEventListener("submit", (event) => {
    event.preventDefault()
    Game.setPlayers(Player(FormPlayerOne.value, "X"), Player(FormPlayerTwo.value, "O"))
    Game.displayGame()
    PlayerDialog.close()
})

//------------------------------------------------
//----------------- FUNCTIONS --------------------
//------------------------------------------------

function Player(username, userSymbol){

    console.log("Hello, " + username + ". Your symbol is: " + userSymbol)

    let name = username
    let symbol = userSymbol

    const getPlayerName = () => { return name}

    return {
        getPlayerName
    }
}


//------------------------------------------------
//------------------- MAIN -----------------------
//------------------------------------------------

GameBoard.createBoard()
GameBoard.printBoard()
