
//------------------------------------------------- 
//--------------- DOM OBJECTS ---------------------
//------------------------------------------------- 

const RockButton =		document.querySelector("#RockButton")
const PaperButton =		document.querySelector("#PaperButton")
const ScissorButton =	document.querySelector("#ScissorButton")

const ComputerScore =	document.querySelector("#ComputerScore")
const HumanScore =		document.querySelector("#HumanScore")

//------------------------------------------------- 
//-------------- DOM FUNCTIONS --------------------
//------------------------------------------------- 

RockButton.addEventListener("click", () => {
	playRound("Rock")
})

PaperButton.addEventListener("click", () => {
	playRound("Paper")
})

ScissorButton.addEventListener("click", () => {
	playRound("Scissors")
})

//------------------------------------------------- 
//---------------- FUNCTIONS ----------------------
//------------------------------------------------- 

function playGame(rounds){
  let humanScore = 0
  let computerScore = 0
  let result
  for(let i = 0; i < rounds; ++i){
    result = playRound()

    if(result === 1){
      humanScore++
      console.log("You won! Nice! Score = " + humanScore)
    }

    else if(result === -1){
      computerScore++
      console.log("Sorry you lost... Score = " + humanScore)
    }

    else{
      console.log("Whoops! You tied! Score = " + humanScore)
    }
  }
}

function playRound(humanChoice){
  let computerChoice = getComputerChoice();

  console.log("Your Choice = " + humanChoice)
  console.log("Computer Choice = " + computerChoice)

  let result = getResult(humanChoice, computerChoice)
  adjustScore(result)
  
}

function getHumanChoice(){
  let choice = prompt("Rock, Paper, or Scissors?")
  return choice
}

function getComputerChoice(){
  number = Math.floor(Math.random() * 100) % 3
  let result
  if(number === 2){
    result = "Rock"
  }

  else if(number === 1){
    result = "Scissors"
  }
  
  else{
    result = "Paper"
  }
  
  return result
}

function adjustScore(result){
	switch(result){
		case 1:
			console.log("You Won")
			HumanScore.textContent = parseInt(HumanScore.textContent) + 1
			break
		case 0:
			console.log("You Tied")
			break
		case -1:
			console.log("You Lost")
			ComputerScore.textContent = parseInt(ComputerScore.textContent) + 1
			break;
	}
}

function getResult(humanChoice, computerChoice){
  if(humanChoice === "Rock"){
    if(computerChoice === "Paper"){
      return -1;
    }
    else if(computerChoice === "Scissors"){
      return 1;
    }
    else{
      return 0;
    }
  }
  else if(humanChoice === "Scissors"){
    if(computerChoice === "Rock"){
      return -1;
    }
    else if(computerChoice === "Paper"){
      return 1;
    }
    else{
      return 0;
    }
  }
  //Human Chose Paper
  else{
    if(computerChoice === "Scissors"){
      return -1;
    }
    else if(computerChoice === "Rock"){
      return 1;
    }
    else{
      return 0;
    }
  }
}

//------------------------------------------------- 
//------------------ MAIN -------------------------
//------------------------------------------------- 


