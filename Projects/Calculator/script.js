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
})

oneButton.addEventListener("click", ()=> {
})

twoButton.addEventListener("click", ()=> {
})

threeButton.addEventListener("click", ()=> {
})

fourButton.addEventListener("click", ()=> {
})

fiveButton.addEventListener("click", ()=> {
})

sixButton.addEventListener("click", ()=> {
})

sevenButton.addEventListener("click", ()=> {
})

eightButton.addEventListener("click", ()=> {
})

nineButton.addEventListener("click", ()=> {

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
})


multiplyButton.addEventListener("click", ()=>{
  operation = "*"
})

minusButton.addEventListener("click", ()=>{
  operation = "-"
})

addButton.addEventListener("click", ()=>{
  operation = "+"
})

equalButton.addEventListener("click", ()=>{
	console.log("Eval Button")
})

//-----------------------------------------------
//---------------- Functions --------------------
//-----------------------------------------------

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

let _firstNumber = ""
let _secondNumber = ""

let _operation
let _operationPlaced = false;

let _display = ""



