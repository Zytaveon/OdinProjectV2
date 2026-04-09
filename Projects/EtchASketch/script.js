//------------------------------------------
//-------------- DOM OBJECTS ---------------
//------------------------------------------

const gameContainer = document.querySelector("#GameContainer")

//------------------------------------------
//------------- DOM FUNCTIONS --------------
//------------------------------------------

//------------------------------------------
//--------------- FUNCTIONS ----------------
//------------------------------------------

// Will always make a sqaure grid and functions expects int as argument
// If function receives 5 as the argument, will create grid 5x5
function createBoard(gridSize){

	for(let i = 0; i < gridSize; ++i){
		const rowDiv = document.createElement("div")
		rowDiv.classList.add("gridRow")

		for(let j = 0; j < gridSize; ++j){
			const columnDiv = document.createElement("div")
			columnDiv.classList.add("gridColumn")
      columnDiv.classList.add("gridSquare")
			//columnDiv.textContent = "."
      columnDiv.addEventListener('mouseenter', () => {
        columnDiv.classList.add("gridSquareActive")
      })
			rowDiv.appendChild(columnDiv)
		}

		gameContainer.appendChild(rowDiv);
	}

  const GridSquares = document.getElementsByClassName(".gridColumn")

}

//GridSquares.addEventListener("mouseenter", () => {
  //this.classList.add("gridSquareActive")
//})



//------------------------------------------
//----------------- MAIN -------------------
//------------------------------------------

createBoard(25)


