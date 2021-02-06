"use strict";

//Setting up - page loading
window.addEventListener("load", start);

function start() {
  console.log("start");
  clickCalculate();
document.querySelector("#clear").addEventListener("click", clearResults);
}

function clickCalculate() {
  console.log("click calculate");
  document.querySelector("#calculate").addEventListener("click", readOperator);
}

function readFirstNumber() {
  console.log("read first number");
  //read first number and convert string into a number
  const firstNumber = parseFloat(document.querySelector("#firstnumber").value);
  return firstNumber;
}

function readSecondNumber() {
  //read second number and convert string into a number
  console.log("read second number");
  const secondNumber = parseFloat(document.querySelector("#secondnumber").value);
  return secondNumber;
}

function readOperator() {
  //Collect numbers and read operator
  console.log("read operator");
  const firstInputNumber = readFirstNumber();
  const secondInputNumber = readSecondNumber();
const operator = document.querySelector("#operator").value;

if (operator == "add"){
  calculationAdd(firstInputNumber, secondInputNumber);
} 
else if (operator == "sub"){
  calculationSub(firstInputNumber, secondInputNumber);
}

else if (operator == "mul"){
  calculationMul(firstInputNumber, secondInputNumber);
}

else if (operator == "div"){
  calculationDiv(firstInputNumber, secondInputNumber);
}

}

function calculationAdd(firstnumber, secondnumber) {
  //takes the numbers fra readOperator and add them
  const resultat = firstnumber + secondnumber;
  console.log(resultat);

  writeResultIntoFirstNumberField(resultat);
}

function calculationSub(firstnumber, secondnumber) {
  //takes the numbers fra readOperator and add them
  const resultat = firstnumber - secondnumber;
  console.log(resultat);

  writeResultIntoFirstNumberField(resultat);
}

function calculationMul(firstnumber, secondnumber) {
  //takes the numbers fra readOperator and add them
  const resultat = firstnumber * secondnumber;
  console.log(resultat);

  writeResultIntoFirstNumberField(resultat);
}

function calculationDiv(firstnumber, secondnumber) {
  //takes the numbers fra readOperator and add them
  const resultat = firstnumber / secondnumber;
  console.log(resultat);

  writeResultIntoFirstNumberField(resultat);
}

function checkIfResultsShouldBeRounded(){
  //Check if checkbox is checked
  const checkbox = document.querySelector("#doround").checked; 
  console.log(checkbox);
  return checkbox; 
}

function writeResultIntoFirstNumberField(resultat){
  if(checkIfResultsShouldBeRounded() == true){
    const numberofdecimals = document.querySelector("#decimals").value; 
    const intdecimals = parseInt(numberofdecimals);
    resultat = resultat.toFixed(intdecimals);
  }

  //Creates new <li>
  let listElement = document.createElement("li");
  //Prepares element with createTextNode and turns resultat into string
  let createListString = document.createTextNode(resultat.toString());
  //Place new list element in child
  listElement.appendChild(createListString);
  //Place new list element in <ul> results list
  document.getElementById("results").appendChild(listElement);
  //Scroll to end of results list
  document.querySelector("#results").scrollTo(0,10000);
  //Insert result in firstnumber field
  document.querySelector("#firstnumber").value = resultat.toString(); 
}

function clearResults(){
  document.querySelector("#results").innerHTML = ""; 
}
