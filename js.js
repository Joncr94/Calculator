number = document.querySelectorAll(".number");
screen = document.querySelector(".display");
firstNumber =  document.querySelector(".firstNumber");
operator = document.querySelectorAll(".operator");
secondNumber =  document.querySelector(".secondNumber");
operation = document.querySelector(".operation")
clearAllEntry = document.querySelector("#AC");
clearEntry = document.querySelector("#C");
equals = document.querySelector(".equals");
back = document.querySelector("#back");
let emptyScreen = "";



number.forEach(number => number.addEventListener("click", () =>{
let chosenNumber = number.textContent;
if (firstNumber.textContent.length < 16 && operation.textContent == `` ){
    if (firstNumber.textContent.includes(".") && chosenNumber == ".") return;
    firstNumber.textContent += chosenNumber;
    
    }
   
        
else if (secondNumber.textContent.length < 16 && operation.textContent !==`` ){
    if (secondNumber.textContent.includes(".") && chosenNumber == ".") return;
    secondNumber.textContent += chosenNumber;
        }
        
})); 
clearAllEntry.addEventListener("click", () =>{
firstNumber.textContent = emptyScreen;
secondNumber.textContent = emptyScreen;
operation.textContent = emptyScreen;
})

clearEntry.addEventListener("click", () =>{
if (operation.textContent == emptyScreen){
    firstNumber.textContent = emptyScreen;
}
else if (secondNumber.textContent == emptyScreen){
    operation.textContent = emptyScreen;
}
else if (secondNumber.textContent !== emptyScreen){
    secondNumber.textContent = emptyScreen;
}
    })
    

operator.forEach(operator => operator.addEventListener("click", () =>{
    if (firstNumber.textContent !== ""){
    let chosenOperator = operator.textContent;
    operation.textContent = chosenOperator;
    }   
})); 

function operate (a, b){
    if (operation.textContent == "+"){
        
     firstNumber.textContent = a + b;
    }
    else if (operation.textContent == "-"){
        firstNumber.textContent = a - b;
    }
    else if (operation.textContent == "/"){
         firstNumber.textContent = a / b;
    }
    else if (operation.textContent == "x"){
         firstNumber.textContent = a * b;
    }
    else if (operation.textContent == "%"){
        firstNumber.textContent = a % b;
   }
    secondNumber.textContent = emptyScreen;
    operation.textContent = emptyScreen;
    return;
}
equals.addEventListener("click", () =>{
operate (+firstNumber.textContent, +secondNumber.textContent)
})


back.addEventListener("click", () =>{
    if (operation.textContent == emptyScreen){
    backbutton(firstNumber);
    }
    else if (secondNumber.textContent == emptyScreen){
        backbutton(operation);
}
else if (secondNumber.textContent !== emptyScreen){
    backbutton(secondNumber);
}
})
function backbutton(a) {
    a.textContent= a.textContent.slice(0, -1);
}


