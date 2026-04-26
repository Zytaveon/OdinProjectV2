//------------------------------------------------
//------------------- NOTES ----------------------
//------------------------------------------------
/*
    
*/
//------------------------------------------------
//---------------- DOM OBJECTS -------------------
//------------------------------------------------



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
    };

    function printBoard(){
        let output = "GameBoard: \n"
        for(let i = 0; i < gameBoardLength; ++i){
            for(let j = 0; j < gameBoardLength; ++j){
                output += gameBoard[i][j] + " "
            }
            output += "\n"
        }

        console.log(output)
    };

    //Return the functions so they can be used
    return{
        createBoard,
        printBoard
    }

})();

const Game = (() => {
    
})();


//------------------------------------------------
//--------------- DOM FUNCTIONS ------------------
//------------------------------------------------



//------------------------------------------------
//----------------- FUNCTIONS --------------------
//------------------------------------------------

function Player(username, userSymbol){
}


//------------------------------------------------
//------------------- MAIN -----------------------
//------------------------------------------------

GameBoard.createBoard()
GameBoard.printBoard()
