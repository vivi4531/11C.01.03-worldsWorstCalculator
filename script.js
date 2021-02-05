"use strict";

//Setting up
//Load Site
window.addEventListener("load", start);

function start(){
    console.log("Lortet virker");
    clickCalculate();
}

function clickCalculate(){
    console.log("Det bliver klikket på calculate");

    document.querySelector("#calculate").addEventListener("click", readFirstNumber);
}

function readFirstNumber(){
    console.log("Første tal læst");

    //Read first number field 
    const firstNumber = document.querySelector("#firstnumber").value;

    readSecondNumber();
}

function readSecondNumber(){
    console.log("Andet tal læst");

    //Read second number field 
    const secondNumber = document.querySelector("#secondnumber").value;

    readOperator;
}

function readOperator(){
    console.log("Operator læst");

    document.querySelector("#firstnumber").value = result; 

    document.querySelector("#firstnumber" + "#secondnumber")
}
