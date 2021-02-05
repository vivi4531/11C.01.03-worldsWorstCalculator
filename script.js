"use strict";

let resultat; 

//setting up
window.addEventListener("load", start);

function start() {
  console.log("start");
  clickCalculate();
}

function clickCalculate() {
  console.log("click calculate");
  document.querySelector("#calculate").addEventListener("click", readOperator);
}

function readFirstNumber() {
  console.log("read first number");
  //read first number and convert string into a number
  const firstNumber = parseInt(document.querySelector("#firstnumber").value);
  return firstNumber;
}

function readSecondNumber() {
  //read second number and convert string into a number
  console.log("read second number");
  const secondNumber = parseInt(document.querySelector("#secondnumber").value);
  return secondNumber;
}

function readOperator() {
  //collect numbers
  console.log("read operator");
  const firstInputNumber = readFirstNumber();
  const secondInputNumber = readSecondNumber();
  calculationPlus(firstInputNumber, secondInputNumber);
}

function calculationPlus(firstnumber, secondnumber) {
  //takes the numbers fra readOperator and add them
  const resultat = firstnumber + secondnumber;
  console.log(resultat);

  writeResultIntoFirstNumberField();
}

function writeResultIntoFirstNumberField(){
   document.querySelector("#firstnumber").textContent = resultat; 
}