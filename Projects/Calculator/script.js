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
	numberPressed("0")
})

oneButton.addEventListener("click", ()=> {
	numberPressed("1")
})

twoButton.addEventListener("click", ()=> {
	numberPressed("2")
})

threeButton.addEventListener("click", ()=> {
	numberPressed("3")
})

fourButton.addEventListener("click", ()=> {
	numberPressed("4")
})

fiveButton.addEventListener("click", ()=> {
	numberPressed("5")
})

sixButton.addEventListener("click", ()=> {
	numberPressed("6")
})

sevenButton.addEventListener("click", ()=> {
	numberPressed("7")
})

eightButton.addEventListener("click", ()=> {
	numberPressed("8")
})

nineButton.addEventListener("click", ()=> {
	numberPressed("9")
})


signButton.addEventListener("click", ()=> {
  console.log("Sign Button, I don't do anything yet :(")
})

decimalButton.addEventListener("click", ()=>{
  console.log("Decimal Button, I don't do anything yet :(")
})

//------------ Operation Buttons ----------------

divideButton.addEventListener("click", ()=>{
	operationPressed("/")
})


multiplyButton.addEventListener("click", ()=>{
	operationPressed("*")
})

minusButton.addEventListener("click", ()=>{
	operationPressed("-")
})

addButton.addEventListener("click", ()=>{
	operationPressed("+")
})

equalButton.addEventListener("click", ()=>{
	evaluate()
})

//-----------------------------------------------
//---------------- Functions --------------------
//-----------------------------------------------

//Number will come in as a string
function numberPressed(number){
	if(!_operationPlaced){
		_firstNumber = _firstNumber + number
	}

	else{
		_secondNumber = _secondNumber + number
	}
	
	console.log("First: ", _firstNumber, " Second: ", _secondNumber)
	addToDisplay(number);

}

//Operation will come in as a string
function operationPressed(operation){
	_operation = operation
	_operationPlaced = true
	stringForDisplay =
	addToDisplay(" " + operation + " ")
}

//The arguments will come as strings
function evaluate(){

	console.log(_firstNumber)
	console.log(_secondNumber)

  let num1 = parseInt(_firstNumber)
  let num2 = parseInt(_secondNumber)

	console.log(num1)
	console.log(num2)

  let result = 0;

  switch(_operation){

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

  clearDisplay()
  _firstNumber = result
  addToDisplay(_firstNumber)

}

function addToDisplay(string){
	_display = _display + string
	calcDisplay.innerText = _display
}

function clearDisplay(){
	_display = ""
}

//-----------------------------------------------
//------------------ MAIN -----------------------
//-----------------------------------------------

let _firstNumber = ""
let _secondNumber = ""

let _operation
let _operationPlaced = false;

let _display = ""



