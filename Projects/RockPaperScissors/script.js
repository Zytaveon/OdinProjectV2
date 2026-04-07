
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

function playRound(){
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  console.log(humanChoice)
  console.log(computerChoice)

  let result = getResult(humanChoice, computerChoice)
  return result
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

console.log("Welcome to Rock, Paper, Scissors!")
console.log("Written by Dakota McMann!")

playGame(5)

