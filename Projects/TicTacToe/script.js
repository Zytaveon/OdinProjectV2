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

    //Takes in symbol of user that last played
    //Player that didn't just make a mark
    //should never win.
    
    //Returns true if won,
    //False if not
    function getWin(symbol){

        let won = false

        //Top Row
        if(gameBoard[0][0] === symbol && gameBoard[0][1] === symbol && gameBoard[0][2] === symbol){
            won = true
        }

        //Middle Row
        if(gameBoard[1][0] === symbol && gameBoard[1][1] === symbol && gameBoard[1][2] === symbol){
            won = true
        }
        
        //Bottom Row
        if(gameBoard[2][0] === symbol && gameBoard[2][1] === symbol && gameBoard[2][2] === symbol){
            won = true
        }
        
        //Left Column
        if(gameBoard[0][0] === symbol && gameBoard[1][0] === symbol && gameBoard[2][0] === symbol){
            won = true
        }
        
        //Middle Column
        if(gameBoard[0][1] === symbol && gameBoard[1][1] === symbol && gameBoard[2][1] === symbol){
            won = true
        }

        //Right Column
        if(gameBoard[0][2] === symbol && gameBoard[1][2] === symbol && gameBoard[2][2] === symbol){
            won = true
        }

        //TopRight to BottomLeft Diagnol
        if(gameBoard[0][0] === symbol && gameBoard[1][1] === symbol && gameBoard[2][2] === symbol){
            won = true
        }

        //BottomRight to TopLeft Diagnol
        if(gameBoard[2][0] === symbol && gameBoard[1][1] === symbol && gameBoard[0][2] === symbol){
            won = true
        }

        return won
    }

    //Return the functions so they can be used
    return{
        createBoard,
        printBoard,
        setTile,
        getSize,
        getTile,
        getWin
    }

})();

const Game = (() => {

    let playerOne
    let playerTwo
    let currentPlayer

    let gameRunning = false

    //Should be receiving player objects already
    function setPlayers(PlayerOne, PlayerTwo){
        playerOne = PlayerOne
        playerTwo = PlayerTwo

        currentPlayer = PlayerOne
        gameRunning = true

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
                    if(gameRunning){
                        tileClicked(i, j, gameBoardCell)
                    }
                })

            gameBoard.appendChild(gridRow)

            }
        }
    }

    function playerWon(player){
        console.log("A player won!")
        const resetButtonContainer = document.querySelector("#resetButtonContainer")
        const resetButton = document.createElement("button")
        resetButton.textContent = "Reset"
        resetButtonContainer.appendChild(resetButton)
        resetButton.addEventListener("click", () => {
            //ClearBoard. Add score to player that won or 1/2 if draw.
            //Reset Board to play again. Remove button
            resetButton.remove()
        })
    }

    function tileClicked(row, col, cell){
        if(GameBoard.getTile(row, col) === null){
            GameBoard.setTile(row, col, currentPlayer.getPlayerSymbol())
            cell.textContent = currentPlayer.getPlayerSymbol()
            if(GameBoard.getWin(currentPlayer.getPlayerSymbol())){
                gameRunning = false
                playerWon(currentPlayer)
            }
            else{
                switchPlayer()
            }
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
