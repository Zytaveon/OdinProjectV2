//-----------------------------------------------
//--------------- DOM OBJECTS -------------------
//-----------------------------------------------

const calcDisplay = document.querySelector("#Display")

//------------- Utility Buttons -----------------

const backButton = document.querySelector("#Back_Button")
const clearButton = document.querySelector("#Clear_Button")
const percentButton = document.querySelector("#Percent_Button")

//------------- Numbers Buttons -----------------

const zeroButton = document.querySelector("#Zero_Button")
const oneButton = document.querySelector("#One_Button")
const twoButton = document.querySelector("#Two_Button")
const threeButton = document.querySelector("#Three_Button")
const fourButton = document.querySelector("#Four_Button")
const fiveButton = document.querySelector("#Five_Button")
const sixButton = document.querySelector("#Six_Button")
const sevenButton = document.querySelector("#Seven_Button")
const eightButton = document.querySelector("#Eight_Button")
const nineButton = document.querySelector("#Nine_Button")

const signButton = document.querySelector("#Sign_Button")
const decimalButton = document.querySelector("#Decimal_Button")

//------------ Operation Buttons ----------------

const divideButton = document.querySelector("#Divide_Button")
const multiplyButton = document.querySelector("#Multiply_Button")
const minusButton = document.querySelector("#Minus_Button")
const addButton = document.querySelector("#Add_Button")
const equalButton = document.querySelector("#Equal_Button")

//-----------------------------------------------
//-------------- DOM FUNCTIONS ------------------
//-----------------------------------------------

//------------- Utility Buttons -----------------
backButton.addEventListener("click", () => {
  console.log("Back")
})

clearButton.addEventListener("click", () => {
  console.log("Clear")
})

percentButton.addEventListener("click", ()=>{
  console.log("Percent")
})

//------------- Numbers Buttons -----------------

zeroButton.addEventListener("click", ()=> {
  if(operationPlaced){firstNumber = numberPressed("0",firstNumber)}
  else{secondNumber = numberPressed("0", secondNumber)}
})

oneButton.addEventListener("click", ()=> {
  if(operationPlaced){firstNumber = numberPressed("1",firstNumber)}
  else{secondNumber = numberPressed("1", secondNumber)}
})

twoButton.addEventListener("click", ()=> {
  if(operationPlaced){firstNumber = numberPressed("2",firstNumber)}
  else{secondNumber = numberPressed("2", secondNumber)}
})

threeButton.addEventListener("click", ()=> {
  if(operationPlaced){firstNumber = numberPressed("3",firstNumber)}
  else{secondNumber = numberPressed("3", secondNumber)}
})

fourButton.addEventListener("click", ()=> {
  if(operationPlaced){firstNumber = numberPressed("4",firstNumber)}
  else{secondNumber = numberPressed("4", secondNumber)}
})

fiveButton.addEventListener("click", ()=> {
  if(operationPlaced){firstNumber = numberPressed("5",firstNumber)}
  else{secondNumber = numberPressed("5", secondNumber)}
})

sixButton.addEventListener("click", ()=> {
  if(operationPlaced){firstNumber = numberPressed("6",firstNumber)}
  else{secondNumber = numberPressed("6", secondNumber)}
})

sevenButton.addEventListener("click", ()=> {
  if(operationPlaced){firstNumber = numberPressed("7",firstNumber)}
  else{secondNumber = numberPressed("7", secondNumber)}
})

eightButton.addEventListener("click", ()=> {
  if(operationPlaced){firstNumber = numberPressed("8",firstNumber)}
  else{secondNumber = numberPressed("8", secondNumber)}
})

nineButton.addEventListener("click", ()=> {
  if(!operationPlaced){firstNumber = numberPressed("9",firstNumber)}
  else{secondNumber = numberPressed("9", secondNumber)}

  addCharacterToDisplay("9")
  calcDisplay.innerText = display
})


signButton.addEventListener("click", ()=> {
  console.log("Sign Button, I don't do anything yet :(")
})

decimalButton.addEventListener("click", ()=>{
  console.log("Decimal Button, I don't do anything yet :(")
})

//------------ Operation Buttons ----------------

divideButton.addEventListener("click", ()=>{
  operation = "/"
  operationPlaced = true;
  addCharacterToDisplay(" / ")

})


multiplyButton.addEventListener("click", ()=>{
  operation = "*"
  operationPlaced = true;
})

minusButton.addEventListener("click", ()=>{
  operation = "-"
  operationPlaced = true;
})

addButton.addEventListener("click", ()=>{
  operation = "+"
  operationPlaced = true;
})

equalButton.addEventListener("click", ()=>{
  evaulate(firstNumber, secondNumber, operation)
})

//-----------------------------------------------
//---------------- Functions --------------------
//-----------------------------------------------

//The argument should come in a string
function numberPressed(numberPressed, currentNumber){
  return currentNumber + numberPressed
}

function addCharacterToDisplay(char){
  return display = display + char;
}

//The arguments will come as strings
function evaulate(number1, number2, operation){

  let num1 = parseInt(number1)
  let num2 = parseInt(number2)

  let result = 0;

  switch(operation){

    case "+":
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;
  }
  
  console.log(result)
  return result

}

//-----------------------------------------------
//------------------ MAIN -----------------------
//-----------------------------------------------

let firstNumber = ""
let secondNumber = ""
let operation
let operationPlaced = false;

let display = ""

console.log(calcDisplay.innerText)

