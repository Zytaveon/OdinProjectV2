//------------------------------------------
//---------- DOM OBJECTS / GLOBALS ---------
//------------------------------------------

const gameContainer = document.querySelector("#GameContainer")
const resetButton = document.querySelector("#ResetButton")

const minusButton = document.querySelector("#MinusButton")
const plusButton = document.querySelector("#PlusButton")
const counter = document.querySelector("#Counter")

const counterMax = 75
const counterMin = 5

let currentGridSize = 25;
let newGridSize;

//------------------------------------------
//------------- DOM FUNCTIONS --------------
//------------------------------------------

minusButton.addEventListener("click", () => {
	if(parseInt(counter.textContent) > counterMin){
		counter.textContent = parseInt(counter.textContent) - 1
	}
})

plusButton.addEventListener("click", () => {
	if(parseInt(counter.textContent) < counterMax){
		counter.textContent = parseInt(counter.textContent) + 1
	}
})

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
}

function resetGrid(){
	const childNodes = document.querySelectorAll("div.gridRow")
	for(let i = 0; i < currentGridSize; ++i){
		gameContainer.removeChild(childNodes[i])
	}
}

resetButton.addEventListener("click", () => {
	resetGrid()
	currentGridSize = parseInt(counter.textContent)
	createBoard(parseInt(counter.textContent))
})


//------------------------------------------
//----------------- MAIN -------------------
//------------------------------------------

createBoard(currentGridSize)


