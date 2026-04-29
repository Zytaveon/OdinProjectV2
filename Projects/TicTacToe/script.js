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
        console.log(output)
    }
    
    function setTile(i, j, value){
        console.log(value, typeof value)
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

    function getTile(row, col){
        return gameBoard[row][col]   
    }

    //Return the functions so they can be used
    return{
        createBoard,
        printBoard,
        setTile,
        getSize,
        getTile
    }

})();

const Game = (() => {

    let playerOne
    let playerTwo
    let currentPlayer

    //Should be receiving player objects already
    function setPlayers(PlayerOne, PlayerTwo){
        playerOne = PlayerOne
        playerTwo = PlayerTwo

        currentPlayer = PlayerOne

        console.log("Hello, " + playerOne.getPlayerName())
        console.log("Hello, " + playerTwo.getPlayerName())

    }

    function displayGame(){
        
        //remove the start button from the header
        startButton.remove()
        
        const gameContainer = document.querySelector("#gameContainer")

        //Player One's Info
        const playerOneCard = document.createElement("div")
        playerOneCard.classList.add("playerCard")
        playerOneCard.classList.add("playerOneCard")
        gameContainer.appendChild(playerOneCard)
        
        //GameBoard Area
        const gameBoard = document.createElement("div")
        gameBoard.classList.add("gameBoard")
        gameContainer.appendChild(gameBoard)

        // Player Two's Info
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

                gameBoardCell.addEventListener("click", () => {
                    tileClicked(i, j, gameBoardCell)
                })

            gameBoard.appendChild(gridRow)

            }
        }
    }

    function tileClicked(row, col, cell){
        if(GameBoard.getTile(row, col) === null){
            GameBoard.setTile(row, col, currentPlayer.getPlayerSymbol())
            cell.textContent = currentPlayer.getPlayerSymbol()
            switchPlayer()
        }

        else{
            console.log("That tile is already taken. Please choose a different tile")
        }

        // GameBoard.setTile(row, col, currentPlayer.getPlayerSymbol())
        // GameBoard.printBoard()
        // cell.textContent = currentPlayer.getPlayerSymbol()
        // switchPlayer()
    }

    function switchPlayer(){
        if(currentPlayer === playerOne){
            currentPlayer = playerTwo
        }
        else{
            currentPlayer = playerOne
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

    const getPlayerName = () => {return name}
    const getPlayerSymbol = () => {return symbol}

    return {
        getPlayerName,
        getPlayerSymbol
    }
}


//------------------------------------------------
//------------------- MAIN -----------------------
//------------------------------------------------

GameBoard.createBoard()
GameBoard.printBoard()
