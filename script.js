let previousInput = '0';
let currentInput = '0';
let calculationOperator = '';

const calculatorScreen =  document.querySelector(".calculator-screen")
const updateScreen = (number) => 
{
    calculatorScreen.value = number
}
const inputNumber = (number) =>
{
    if(currentInput == '0')
    {
        currentInput = number;
    }
    else
    {
        currentInput += number 
    }
}
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => 
{
    number.addEventListener("click" , (event) => 
    {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})
const inputOperator = (operator) =>
{
    previousInput = currentInput
    console.log(previousInput)
    calculationOperator = operator
    console.log(calculationOperator)
    currentInput = '0'
    console.log(currentInput)
}
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click" , () =>
{
    console.log('hi')
    calculation()
    updateScreen(currentInput)
})
let calculation = () =>
{
    let result = 0
    switch(calculationOperator)
    {
        case '+' :
        {
                result = parseInt(previousInput) + parseInt(currentInput)
                break
        }
        case '-' :
            {
                result = parseInt(previousInput) - parseInt(currentInput)
                break
            }
        case '*' :
            {
                result = parseInt(previousInput) * parseInt(currentInput)
                break
            }
        case '/' :
            {
                result = parseInt(previousInput) / parseInt(currentInput)
                break
            }  
        default:
            return;      
    }
    currentInput = result.toString()
    console.log(currentInput)
    calculationOperator = ''
}
const allClear = document.querySelector(".all-clear")
allClear.addEventListener("click" , () => {
    currentInput='0'
    updateScreen()
})
