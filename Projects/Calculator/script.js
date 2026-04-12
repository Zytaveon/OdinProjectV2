//-----------------------------------------------
//--------------- DOM OBJECTS -------------------
//-----------------------------------------------

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
  console.log("Zero")
})

oneButton.addEventListener("click", ()=> {
  console.log("One")
})

twoButton.addEventListener("click", ()=> {
  console.log("Two")
})

threeButton.addEventListener("click", ()=> {
  console.log("Three")
})

fourButton.addEventListener("click", ()=> {
  console.log("Four")
})

fiveButton.addEventListener("click", ()=> {
  console.log("Five")
})

sixButton.addEventListener("click", ()=> {
  console.log("Six")
})

sevenButton.addEventListener("click", ()=> {
  console.log("Seven")
})

eightButton.addEventListener("click", ()=> {
  console.log("Eight")
})

nineButton.addEventListener("click", ()=> {
  console.log("Nine")
})


signButton.addEventListener("click", ()=> {
  console.log("Sign")
})

decimalButton.addEventListener("click", ()=>{
  console.log("Decimal")
})

//------------ Operation Buttons ----------------

divideButton.addEventListener("click", ()=>{
  console.log("Divide")
})

multiplyButton.addEventListener("click", ()=>{
  console.log("Multiply")
})

minusButton.addEventListener("click", ()=>{
  console.log("Minus")
})

addButton.addEventListener("click", ()=>{
  console.log("Add")
})

equalButton.addEventListener("click", ()=>{
  console.log("Equal")
})

//-----------------------------------------------
//------------------ MAIN -----------------------
//-----------------------------------------------

console.log("Hello!")
